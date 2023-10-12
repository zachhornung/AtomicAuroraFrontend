import { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import Bear from "../assets/landscape-bear.png";
import { ChildrenContainer } from "./ChildrenContainer";

type Props = {
  children: ReactNode | ReactNode[];
};

export const BasePage = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex-grow relative flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${Bear})` }}
        />
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <ChildrenContainer className="relative z-10 text-white overflow-y-auto">
          {children}
        </ChildrenContainer>
      </div>
      <Footer />
    </div>
  );
};
