import { siteConfig } from "@/config/site";

export const getHrefFromName = (name: string) => {
  const item = siteConfig.navItems.find(
    (i) => i.label.toLowerCase() === name.toLowerCase(),
  );

  return item ? item.href : "/";
};
