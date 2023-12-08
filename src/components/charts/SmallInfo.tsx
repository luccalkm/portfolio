import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const SmallInfo = ({ children }: Props) => {
  return (
    <div className="bg bg-slate-700 h-1/2 rounded-md p-4 ">
      <div className="w-full h-full flex justify-center items-center flex-col">
        {children}
      </div>
    </div>
  );
};
