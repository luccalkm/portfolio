import { ReactNode } from "react";

interface Props {
  color: string;
  position: { x: number; y: number };
  delay?: number;
  showSocial: boolean;
  link: string;
}

export const SocialIcon = ({
  link,
  color,
  position,
  delay,
  showSocial,
}: Props) => {
  const baseSocialStyle =
    "absolute  flex items-center justify-center rounded-full w-16 h-16 transition-all ease-in";

  const getDelay = () => {
    if (delay) return `delay-${delay}`;
  };

  const getTranslateClasses = () => {
    const translateX = showSocial ? position.x : 0;
    const translateY = showSocial ? position.y : -2;

    const translateXString =
      translateX < 0
        ? `-translate-x-${translateX * -1}`
        : `translate-x-${translateX}`;

    const translateYString =
      translateY < 0
        ? `-translate-y-${translateY * -1}`
        : `translate-y-${translateY}`;

    return `${translateXString} ${translateYString}`;
  };

  return (
    <a
      href={link}
      className={`${baseSocialStyle} ${getDelay()} ${getTranslateClasses()} ${color} ${
        showSocial ? "scale-100" : "scale-0"
      } `}
    >
      <img src={link} className="w-11/12" />
    </a>
  );
};
