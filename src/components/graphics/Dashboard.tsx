import { GithubProvider } from "../../context/github";
import { PieGraph } from "../common/PieGraph";

export const Dashboard = () => {
  return (
    <GithubProvider>
    <div className="grid grid-cols-3 gap-10 p-10">
      <div className="bg-slate-700 rounded-lg p-3 flex flex-col gap-2 w-100 h-52 justify-center">
        <PieGraph />
      </div>
    </div>
    <GithubProvider/>
  );
};
