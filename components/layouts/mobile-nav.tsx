"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
// import type { MainNavItem } from '@/types';

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BotIcon, MenuIcon } from "lucide-react";
import { MainNavItem } from "@/lib/types";
import { useMediaQuery } from "@/hooks/use-media-query";

interface MobileNavProps {
  items?: MainNavItem[];
}

export function MobileNav({ items }: MobileNavProps) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const segment = useSelectedLayoutSegment();
  const [open, setOpen] = React.useState(false);

  if (isDesktop) return null;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-5 self-center hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
        >
          <MenuIcon aria-hidden="true" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>
            <div className="flex items-center gap-2 text-sidebar-accent-foreground">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setOpen(false)}
              >
                <BotIcon className="size-8" aria-hidden="true" />
              </Link>
              <span className="truncate font-semibold text-left text-sm leading-tight">
                {siteConfig.name}
              </span>
            </div>
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col">
            {items?.map((item, index) =>
              item.items?.length ? (
                <Accordion key={item.title} type="multiple" className="w-full">
                  <AccordionItem value={item.title} key={index}>
                    <AccordionTrigger className="text-sm capitalize">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        {item.items?.map((subItem, index) =>
                          subItem.url ? (
                            <MobileLink
                              key={index}
                              url={String(subItem.url)}
                              segment={String(segment)}
                              setOpen={setOpen}
                              disabled={subItem.disabled}
                              className="m-1"
                            >
                              {item.title}
                            </MobileLink>
                          ) : (
                            <div
                              key={index}
                              className="text-foreground/70 transition-colors"
                            >
                              {item.title}
                            </div>
                          )
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <MobileLink
                  key={index}
                  url={String(item.url)}
                  segment={String(segment)}
                  setOpen={setOpen}
                  disabled={item.disabled}
                  className="m-1"
                >
                  {item.title}
                </MobileLink>
              )
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  url: string;
  disabled?: boolean;
  segment: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileLink({
  children,
  url,
  disabled,
  segment,
  setOpen,
  className,
  ...props
}: MobileLinkProps) {
  return (
    <Link
      href={url}
      className={cn(
        "text-foreground/70 transition-colors hover:text-foreground",
        url.includes(segment) && "text-foreground",
        disabled && "pointer-events-none opacity-60",
        className
      )}
      onClick={() => setOpen(false)}
      {...props}
    >
      {children}
    </Link>
  );
}
