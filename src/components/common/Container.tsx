import { FC, PropsWithChildren } from "react";

export const Container: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex h-screen mx-auto bg-gray-950 text-white">
      <div className="w-5/6 mx-auto">{children}</div>
    </div>
  );
};
