import { descriptionText } from "../../config/descriptionConfig";

const { title, subtitle, description } = descriptionText;

export const Introduction = () => {
  return (
    <div className="w-5/12 h-2/3 flex justify-center flex-col p-2">
      <div className="flex flex-col mb-3">
        <h1 className="text-4xl font-bold">{title}</h1>
        <h3 className="text-xl font-semibold">{subtitle}</h3>
      </div>
      {Object.values(description).map((value) => (
        <p>{value}<br /></p>
      ))}
    </div>
  );
};
