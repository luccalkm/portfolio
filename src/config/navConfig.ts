export type NavLink = {
  title: string;
  href: string;
};

export type NavMenu = {
  about: string;
  contact: string;
  projects: string;
};

export type NavBarText = {
  logoImage: string;
  link: NavLink;
  menu: NavMenu;
};

export const navBarText: NavBarText = {
  logoImage: "#",
  link: {
    title: "Link",
    href: "#",
  },
  menu: {
    about: "About",
    contact: "Contact",
    projects: "Projects",
  },
};
