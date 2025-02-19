import { NavItemWithChildren } from "./types";

export const ITEMS_PER_PAGE = 28;

//Info: The following data is used for the sidebar navigation and Cmd K bar.
export const navItems: NavItemWithChildren[] = [
  {
    title: "product",
    url: "/dashboard/overview",
    items: [], // Empty array as there are no child items for Dashboard
  },
  {
    title: "survey",
    url: "/dashboard/survey",
    items: [
      {
        title: "customer",
        url: "/dashboard/overview",
        items: [],
      },
    ], // No child items
  },
  {
    title: "customerManagement",
    url: "/dashboard/customer",
    shortcut: ["p", "p"],
    items: [], // No child items
  },
  {
    title: "kanban",
    url: "/kanban",
    items: [], // No child items
  },
];
