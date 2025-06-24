export type SiteConfig = typeof siteConfig

export const SITE_HREF = {
  // home: '/',
  ticketListings: '/ticket-listings',
  checkout: '/checkout'
  // about: '/about'
}

export const siteConfig = {
  name: 'Ticketing System',
  description: 'Dummy ticketing system built with Hero UI, Next.js, and Redux Toolkit',
  navItems: [
    // {
    //   label: 'Home',
    //   href: SITE_HREF.home
    // },
    {
      label: 'Ticket Listings',
      href: SITE_HREF.ticketListings
    },
    {
      label: 'Checkout',
      href: SITE_HREF.checkout
    }
    // {
    //   label: 'About',
    //   href: SITE_HREF.about
    // }
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile'
    },
    {
      label: 'Dashboard',
      href: '/dashboard'
    },
    {
      label: 'Projects',
      href: '/projects'
    },
    {
      label: 'Team',
      href: '/team'
    },
    {
      label: 'Calendar',
      href: '/calendar'
    },
    {
      label: 'Settings',
      href: '/settings'
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback'
    },
    {
      label: 'Logout',
      href: '/logout'
    }
  ],
  links: {
    github: 'https://github.com/heroui-inc/heroui',
    twitter: 'https://twitter.com/hero_ui',
    docs: 'https://heroui.com',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev'
  }
}
