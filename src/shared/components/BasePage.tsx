import { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import Bear from "../../assets/landscape-bear.png";
import { ChildrenContainer } from "./ChildrenContainer";

type Props = {
  children: ReactNode | ReactNode[];
};

export const BasePage = (props: Props) => {
  const { children } = props;
  return (
    <div className="flex flex-col min-h-screen h-full">
      <Nav />
      <div className="flex-grow relative flex items-center justify-center text-center h-full">
        <div
          className="bg-fixed absolute inset-0 bg-cover bg-center flex-1"
          style={{ 
            backgroundImage: `url(${Bear})`,
          }}
        />
        <div className="absolute inset-0 bg-black opacity-80 flex-1"></div>
        <ChildrenContainer className="overflow-y-scroll relative z-10 text-white h-full w-full flex-1 flex-grow">
          {children}
        </ChildrenContainer>
      </div>
      <Footer />
    </div>
  );
};
