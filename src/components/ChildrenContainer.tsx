import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
};

export const ChildrenContainer = (props: Props) => {
  const { children } = props;
  return (
    <>
      <div className="absolute inset-0 bg-black opacity-40 p-20"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        {children}
      </div>
    </>
  );
};
