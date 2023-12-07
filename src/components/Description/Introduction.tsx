import { descriptionText } from "../../config/descriptionConfig";
import { ColoredSpan } from "../common/ColoredSpan";

const { title, subtitle, description } = descriptionText;

export const Introduction = () => {
  return (
    <div className="w-5/12 h-2/3 flex justify-center flex-col p-2">
      <div className="flex flex-row items-end justify-between mb-3">
        <h1 className="text-4xl font-bold">{title}</h1>
        <h3 className="text-xl font-semibold">{subtitle}</h3>
      </div>
      <div className="flex flex-col justify-center rounded-md bg-slate-800 p-2 gap-2">
        {(Object.values(description) as string[]).map(
          (value: string, index: number) => (
            <div className="flex flex-row bg-slate-700 p-2 items-start hover:bg-slate-600">
              <ColoredSpan
                className="font-medium pl-2 pr-4 text-green-300"
                key={value}
              >
                {index}
              </ColoredSpan>
              <ColoredSpan className="font-medium " key={index}>
                {value}
              </ColoredSpan>
            </div>
          )
        )}
      </div>
    </div>
  );
};
