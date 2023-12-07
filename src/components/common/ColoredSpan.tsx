import { ReactNode } from "react";

interface Props {
  className: string;
  children: ReactNode;
}

export const ColoredSpan = ({ className, children }: Props) => {
  return <span className={className}>{children}</span>;
};
