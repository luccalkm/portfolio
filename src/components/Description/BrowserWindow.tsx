import { Code } from "./Code";
import { descriptionText } from "../../config/descriptionConfig";

interface IBrowserProps {}

export const BrowserWindow = (props: IBrowserProps) => {
  const baseBrowserButtons = "w-4 h-4 rounded-full";
  const buttonColors = ["bg-red-500", "bg-yellow-500", "bg-green-500"];

  return (
    <div className="px-10 w-5/12 p-2 flex">
      <div
        className={`-skew-y-6 w-full bg-purple-600-70 rounded-2xl flex justify-center`}
      >
        <div
          className={`skew-y-6 w-11/12 bg-slate-800 px-8 py-5 rounded-md group`}
        >
          <div className="gap-2 flex flex-row min-w pb-5">
            {buttonColors.map((color) => {
              return (
                <div
                  key={color}
                  className={`${baseBrowserButtons + " " + color}`}
                ></div>
              );
            })}
          </div>
          <Code devData={descriptionText.devData} />
        </div>
      </div>
    </div>
  );
};
