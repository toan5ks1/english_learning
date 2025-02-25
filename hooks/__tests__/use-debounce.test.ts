import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "../use-debounce";

jest.useFakeTimers(); // Simulate timers for better control

test("returns initial value immediately", () => {
  const { result } = renderHook(() => useDebounce("hello", 500));
  expect(result.current).toBe("hello");
});

test("updates debounced value after delay", () => {
  const { result, rerender } = renderHook(
    ({ value }) => useDebounce(value, 500),
    {
      initialProps: { value: "hello" },
    }
  );

  // Update value
  rerender({ value: "world" });

  // Immediately after update, it should still be "hello"
  expect(result.current).toBe("hello");

  // Fast-forward time by 500ms
  act(() => {
    jest.advanceTimersByTime(500);
  });

  // Now the value should be updated to "world"
  expect(result.current).toBe("world");
});

test("clears timeout when value changes before delay", () => {
  const { result, rerender } = renderHook(
    ({ value }) => useDebounce(value, 500),
    {
      initialProps: { value: "hello" },
    }
  );

  rerender({ value: "world" });

  // Before timeout completes, change value again
  rerender({ value: "next" });

  // Fast-forward time by 499ms (still not complete)
  act(() => {
    jest.advanceTimersByTime(499);
  });

  // Debounced value should still be "hello" (old value)
  expect(result.current).toBe("hello");

  // Fast-forward by 1 more ms (total 500ms)
  act(() => {
    jest.advanceTimersByTime(1);
  });

  // Now it should finally update to "next"
  expect(result.current).toBe("next");
});

test("cleans up timeout on unmount", () => {
  const { unmount } = renderHook(() => useDebounce("test", 500));

  // Spy on clearTimeout
  const clearTimeoutSpy = jest.spyOn(global, "clearTimeout");

  unmount(); // Unmount the hook

  expect(clearTimeoutSpy).toHaveBeenCalled(); // Ensure cleanup ran

  clearTimeoutSpy.mockRestore(); // Restore original function
});
