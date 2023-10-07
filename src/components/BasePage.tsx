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
    <div
      className="flex flex-col min-h-screen bg-cover bg-local bg-center"
      style={{ backgroundImage: `url(${Bear})` }}
    >
      <Nav />
      <div className="flex-grow container text-white">
        <ChildrenContainer>
          {children}
        </ChildrenContainer>
      </div>
      <Footer />
    </div>
  );
};
