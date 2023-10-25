import { Home } from "./views/Home";
import { ShowsView } from "./views/Shows";
import { Merch } from "./views/Merch";
import { About } from "./views/About";
import { Listen } from "./views/Listen";
import { BasePageAnimation } from "./animations/pageAnimations";
import { Login } from "./features/auth/views/Login";

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
      path: "/merch",
      element: <BasePageAnimation><Merch /></BasePageAnimation> 
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
