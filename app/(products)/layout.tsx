import { SideBar } from "@/features/product/components/side-bar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Heroes } from "./components/heroes";
import { Footer } from "./components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Heroes />
      <div className="relative">
        <SidebarProvider>
          <SideBar />
          {children}
        </SidebarProvider>
        <Footer />
      </div>
    </>
  );
}
