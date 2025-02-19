"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { siteConfig } from "@/config/site";
import { BotIcon } from "lucide-react";
import { MainNavItem } from "@/lib/types";

interface MainNavProps {
  items?: MainNavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="hidden gap-10 lg:flex">
      <div className="flex items-center gap-2 py-2 text-sidebar-accent-foreground">
        <Link href="/">
          <BotIcon className="size-8" />
        </Link>
        <span className="truncate font-semibold text-left text-sm leading-tight">
          {siteConfig.name}
        </span>
      </div>

      <NavigationMenu>
        <NavigationMenuList className="text-foreground/80">
          {items
            ?.filter((item) => item.title !== items[0]?.title)
            .map((item) =>
              item?.items?.length ? (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger className="h-auto capitalize">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[200px] gap-3 p-4 md:w-[250px] lg:w-[300px]">
                      {item.items.map((subItem) => (
                        <ListItem
                          key={subItem.title}
                          title={item.title}
                          href={subItem.url}
                        >
                          {subItem.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                item.url && (
                  <NavigationMenuItem key={item.title}>
                    <Link href={item.url} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(navigationMenuTriggerStyle(), "h-auto")}
                      >
                        <span>{item.title}</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              )
            )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={String(href)}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
