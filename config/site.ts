export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "NFT Marketplace",
  description:
    "Next.js App Router with server side sorting, pagination, and filtering",
};

export const API_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
