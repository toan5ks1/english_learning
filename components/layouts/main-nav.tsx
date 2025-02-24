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

import { MainNavItem } from "@/lib/types";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
interface MainNavProps {
  items: MainNavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname();
  return (
    <NavigationMenu className="hidden lg:flex items-center flex-1 max-w-none">
      <NavigationMenuList className="flex space-x-16 text-white text-lg font-bold uppercase">
        {items.map((item) => (
          <NavigationMenuItem key={item.title}>
            <Link
              href={item.url}
              className={`relative transition-colors ${
                pathname === item.url
                  ? "text-pink-500"
                  : "text-white hover:text-gray-300"
              }`}
              passHref
            >
              <span>{item.title.toUpperCase()}</span>
              {pathname === item.url && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-2 w-8 h-1 bg-gradient-to-r from-[#DA458F] to-[#DA34DD]"
                  initial={{ opacity: 0, y: 2 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
