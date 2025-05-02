import {
    Navbar1,
  Navbar2,
  Navbar3,
  Sidebar1,
  Sidebar2,
  Sidebar3,
  Sidebar4,
  Sidebar5,
  Sidebar6,
  Sidebar7,
  Sidebar8,
  Card1,
  Card2Example,
} from "./components";

export const routes = [
 
  {
    name: "Navbar1",
    path: "/navbars/navbar-1",
    element: <Navbar1 />,
  },
  {
    name: "Navbar2",
    path: "/navbars/navbar-2",
    element: <Navbar2 />,
  },
  {
    name: "Navbar3",
    path: "/navbars/navbar-3",
    element: <Navbar3 />,
  },
  {
    name: "Sidebar1",
    path: "/sidebars/sidebar-1",
    element: <Sidebar1 />,
  },
  {
    name: "Sidebar2",
    path: "/sidebars/sidebar-2",
    element: <Sidebar2 />,
  },
  {
    name: "Sidebar3",
    path: "/sidebars/sidebar-3",
    element: <Sidebar3 />,
  },
  {
    name: "Sidebar4",
    path: "/sidebars/sidebar-4",
    element: <Sidebar4 />,
  },
  {
    name: "Sidebar5",
    path: "/sidebars/sidebar-5",
    element: <Sidebar5 />,
  },
  {
    name: "Sidebar6",
    path: "/sidebars/sidebar-6",
    element: <Sidebar6 />,
  },
  {
    name: "Sidebar7",
    path: "/sidebars/sidebar-7",
    element: <Sidebar7 />,
  },
  {
    name: "Sidebar8",
    path: "/sidebars/sidebar-8",
    element: <Sidebar8 />,
  },
  {
    name: "Card1",
    path: "/cards/card-1",
    element: <Card1 />,
  },
  {
    name: "Card2",
    path: "/cards/card-2",
    element: <Card2Example />,
  },
];
