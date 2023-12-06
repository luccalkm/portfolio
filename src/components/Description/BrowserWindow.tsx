import { Code } from "./Code";
import { textConfigurations } from "../../config/textConfig";

interface IBrowserProps {}

export const BrowserWindow = (props: IBrowserProps) => {
  
  const { descriptionText } = textConfigurations;

  const baseBrowserButtons = "w-4 h-4 rounded-full";
  const buttonColors = ["bg-red-500", "bg-yellow-500", "bg-green-500"];

  // 0, 1, 2, 3, 6, 12 (e negativos)
  const rotateDeg = 'skew-y-6';

  return (
    <div className="px-10 w-5/12 p-2 flex">
      <div className={`-${rotateDeg} w-full bg-purple-600-60 rounded-2xl flex justify-center`}>
        <div
          className={`${rotateDeg} w-11/12 bg-slate-800 px-8 py-5 rounded-md group`}
        >
            <div className="gap-2 flex flex-row min-w pb-5">
              {buttonColors.map((color) => (
                <div key={color} className={`${baseBrowserButtons + " " + color}`}></div>
              ))}
            </div>
            <Code devData={descriptionText.devData} />
        </div>
      </div>
    </div>
  );
}
