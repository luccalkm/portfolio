type NavLink = {
  title: string;
  href: string;
};

type NavMenu = {
  home: string;
  about: string;
  contact: string;
};

type NavBarText = {
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
    home: "Home",
    about: "About",
    contact: "Contact",
  },
};
