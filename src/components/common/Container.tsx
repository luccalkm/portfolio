import { ReactNode } from "react";

interface Props {
  bgColor: string;
  children: ReactNode;
}

export const Container = ({bgColor, children}: Props) => {
  return (
    <div className={`flex h-content mx-auto ${bgColor} text-white`}>
      <div className="w-5/6 mx-auto">{children}</div>
    </div>
  );
};


