import { descriptionText } from "../../config/descriptionConfig";
import { SocialIcon } from "../common/SocialIcon";
import { ColoredSpan } from "../common/ColoredSpan";
import { links } from "../../config/linksConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Introduction = () => {
  const { title, subtitle, description, icons } = descriptionText;

  return (
    <div className="w-5/12 h-2/3 flex justify-center flex-col p-2">
      <div className="flex flex-row items-end justify-between mb-3">
        <h1 className="text-4xl font-bold">{title}</h1>
        <h3 className="text-2xl font-semibold">{ subtitle} </h3>
      </div>
      <h3 className="text-lg font-semibold mb-2">{description}</h3>
      <div className="flex justify-center items-end p-1 gap-4">
        {icons.map((icon) => {
          return <FontAwesomeIcon key={icon.name} icon={icon.icon} className="text-4xl text-slate-500" />;
        })}
      </div>
    </div>
  );
};
