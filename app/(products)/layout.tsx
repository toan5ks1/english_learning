import { SideBar } from "@/features/product/components/side-bar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { NewArrivalBanner } from "./components/heroes/heroes";
import { Footer } from "./components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NewArrivalBanner />
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
