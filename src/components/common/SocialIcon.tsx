import { useState } from "react";

interface Props {
  color: string;
  position?: { x: number; y: number };
  delay?: number;
  showSocial: boolean;
  link: string;
  size?: number;
}

export const SocialIcon = ({
  size,
  link,
  color,
  position,
  delay,
  showSocial,
}: Props) => {
  const [isHovered, setHovered] = useState(false);

  const baseSocialStyle =
    `${position === undefined ? '' : 'absolute'}  flex items-center  justify-center rounded-full w-16 h-16 transition-all ease-in`;

  const getDelay = () => {
    if (position === undefined) return "delay-100";
    if (delay) return `delay-${delay}`;
  };

  const getTranslateClasses = () => {
    if (position === undefined) return "";

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
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      href={link}
      className={`${baseSocialStyle} ${getDelay()} ${getTranslateClasses()} ${color} ${
        showSocial ? "scale-100" : "scale-0"
      } ${isHovered && showSocial && "scale-90"}`}
    >
      <img src={link} className={`${size === undefined ? 'w-11/12' : size }`} />
    </a>
  );
};
