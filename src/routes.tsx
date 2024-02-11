import { About } from "./features/about/views/About";
import { Login } from "./features/auth/views/Login";
import { Home } from "./features/home/views/Home";
import { ProductsView } from "./features/products/views/Products";
import { Listen } from "./features/music/views/Listen";
import { ShowsView } from "./features/shows/views/Shows";
import { BasePageAnimation } from "./shared/animations/pageAnimations";

export const getRoutes = () => {
  return [
    {
      path: "/",
      element: <BasePageAnimation><Home /></BasePageAnimation> 
    },
    {
      path: "/home",
      element: <BasePageAnimation><Home /></BasePageAnimation> 
    },
    {
      path: "/shows",
      element: <BasePageAnimation><ShowsView /></BasePageAnimation> 
    },
    {
      path: "/products",
      element: <BasePageAnimation><ProductsView /></BasePageAnimation> 
    },
    {
      path: "/about",
      element: <BasePageAnimation><About /></BasePageAnimation> 
    },
    {
      path: "/listen",
      element: <BasePageAnimation><Listen /></BasePageAnimation> 
    },
    {
      path: "/login",
      element: <BasePageAnimation><Login /></BasePageAnimation>
    }
  ];
};
