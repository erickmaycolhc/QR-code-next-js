export type Navbar = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  subMenu?: Navbar[];
};
