import { Navbar } from "@/types/navbar";

export const navbarData: Navbar[] = [
  {
    id: 1,
    title: "Inicio",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Buscar",
    path: "/search",
    newTab: false,
  },
  {
    id: 6,
    title: "Opciones",
    newTab: false,
    subMenu: [
      {
        id: 61,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 68,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
