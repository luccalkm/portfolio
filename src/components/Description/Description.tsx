import { BrowserWindow } from "./BrowserWindow";
import { Introduction } from "./Introduction";

export const Description = () => {

  return (

    <div className="mt-10 flex flex-row-reverse justify-around rounded-lg h-full items-center">
      <BrowserWindow />
      <Introduction />
    </div>
  );
}
