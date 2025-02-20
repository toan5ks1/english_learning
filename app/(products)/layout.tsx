import { SideBar } from "@/features/product/components/side-bar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Heroes } from "./components/heroes";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Heroes />
      <SidebarProvider>
        <SideBar />
        {/* <SidebarTrigger /> */}
        {children}
      </SidebarProvider>
      <div className="w-full h-[50rem] bg-slate-500">
        <p>This is sdfsdfsd</p>
      </div>
    </>
  );
}
