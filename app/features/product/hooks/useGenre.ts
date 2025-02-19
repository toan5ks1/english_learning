import { Genre } from "@/app/api/genres/route";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGenres = () => {
  const getAllGenres = async (): Promise<Genre[]> => {
    const res = await fetch("/api/genres");

    if (!res.ok) toast("Failed to fetch genres");
    return res.json();
  };

  const { data = [], isFetching } = useQuery({
    queryKey: ["getAllGenres"],
    queryFn: getAllGenres,
    placeholderData: (previousData) => previousData ?? [],
    staleTime: 1000 * 30,
  });

  return { isFetching, genres: data };
};
