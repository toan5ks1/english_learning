import { SideBar } from "@/features/product/components/side-bar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { NewArrivalBanner } from "./components/heroes/heroes";
import { Footer } from "./components/footer";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NewArrivalBanner />
      <div className="relative">
        <SidebarProvider>
          <SideBar />
          {children}
        </SidebarProvider>
        <Image
          src="/heroes/page-end.svg"
          alt="Background Image"
          width={900}
          height={300}
          loading="lazy"
          className="w-full h-auto object-cover object-center"
        />
        <Footer />
      </div>
    </>
  );
}
