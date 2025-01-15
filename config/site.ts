export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "TechGaetano",
  description: "Providing tech solutions to MSMEs.Tech Gaetano makes it simple for Micro, Small and Medium Enterprises (MSMEs) to plan day-to-day tasks while keeping the larger team goals in view.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
   
   /* {
      label: "Pricing",
      href: "/pricing",
    },*/
    {
      label: "Blog",
      href: "/blog",
    },
     {
      label: "Services",
      href: "/services",
     },
    {
      label: "About",
      href: "/about",
    },
     {
      label: "Get Started",
      href: "/get-started",
     },
     {
      label: "Contact",
      href: "/contact",
    },
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
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://x.com/techgaetano?t=v_gE95eAK8pvh_gEvfrB4Q&s=08",
    //docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
