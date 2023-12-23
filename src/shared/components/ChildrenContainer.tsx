import { ReactNode } from "react";

type Props = {
  children: ReactNode | ReactNode[];
  className?: string,
};

export const ChildrenContainer = (props: Props) => {
  const { className, children } = props;
  return (
    <div className={className}>
      {children}
    </div>
  );
};
