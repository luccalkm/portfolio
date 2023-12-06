export type DevData = {
  name: string;
  age: number;
  backend: string[];
  frontend: string[];
  database: string[];
  agile: string[];
  others: string[];
};

export type DescriptionText = {
  title: string;
  subtitle: string;
  description: {};
  devData: DevData;
};

export type NavLink = {
  title: string;
  href: string;
};

export type NavMenu = {
  home: string;
  about: string;
  contact: string;
};

export type NavBarText = {
  logoImage: string;
  link: NavLink;
  menu: NavMenu;
};