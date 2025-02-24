import { ICategory, ITheme, ITier } from "@/db/model";
import { NavItemWithChildren } from "./types";

export const ITEMS_PER_PAGE = 28;

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItemWithChildren[] = [
  {
    title: "Home",
    url: "/#",
    items: [],
  },
  {
    title: "About us",
    url: "/about-us",
    items: [],
  },
  {
    title: "Our teams",
    url: "/our-teams",
    items: [],
  },
  {
    title: "Marketplace",
    url: "/",
    items: [],
  },
  {
    title: "Roadmap",
    url: "/roadmap",
    items: [],
  },
  {
    title: "Whitepaper",
    url: "/whitepaper",
    items: [],
  },
];

export const CATEGORIES: ICategory[] = [
  "Upper Body",
  "Lower Body",
  "Hat",
  "Shoes",
  "Accessory",
  "Legendary",
  "Mythic",
  "Epic",
  "Rare",
];

export const TIER: ITier[] = ["Basic", "Premium", "Deluxe"];

export const THEME: ITheme[] = ["Dark", "Light", "Colorful", "Halloween"];
