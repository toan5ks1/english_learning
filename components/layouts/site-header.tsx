import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
// import { UserNav } from "./user-nav";
import { ModeToggle } from "./mode-toggle";
import { navItems } from "@/lib/const";

export function SiteHeader() {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 justify-between">
        <MainNav items={navItems} />
        <MobileNav items={navItems} />
        <div className="flex items-center space-x-2">
          {/* <UserNav /> */}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
