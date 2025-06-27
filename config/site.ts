export type SiteConfig = typeof siteConfig;

export const SITE_HREF = {
  home: "/",
  ticketListings: "/ticket-listings",
  checkout: "/checkout",
  // about: '/about'
};

export const siteConfig = {
  name: "Tickety",
  description: "A ticketing system that's no other like it.",
  navItems: [
    // {
    //   label: 'Home',
    //   href: SITE_HREF.home
    // },
    {
      label: "Ticket Listings",
      href: SITE_HREF.ticketListings,
    },
    {
      label: "Checkout",
      href: SITE_HREF.checkout,
    },
    // {
    //   label: 'About',
    //   href: SITE_HREF.about
    // }
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  footerItems: [
    {
      label: "Promotions",
      href: "/promotions",
    },
    {
      label: "Partners",
      href: "/partners",
    },
    {
      label: "Legals",
      href: "/legals",
    },
    {
      label: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      label: "Terms & Conditions",
      href: "/terms-conditions",
      isHidden: false,
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
