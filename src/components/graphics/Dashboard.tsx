import { PieChart } from "../common/PieChart";
import { useGithubContext } from "../../context/github";
import { AreaChart } from "../common/AreaChart";
import { useEffect, useState } from "react";

export const Dashboard = () => {
  const { loading, getMonthlyCommitCounts } = useGithubContext();
  const [commits, setCommits] = useState<{ [key: string]: number }>({});
  const [loadingArea, setLoadingArea] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingArea(true);
      try {
        const monthlyCommits = await getMonthlyCommitCounts();
        setCommits(monthlyCommits);
        setLoadingArea(false);
      } catch (error) {
        console.error("Failed to fetch monthly commits:", error);
        setLoadingArea(false);
      }
    };

    fetchData();
  }, [getMonthlyCommitCounts]);

  const langs = {
    "C#": 4,
    Java: 1,
    JavaScript: 5,
    Others: 2,
    TypeScript: 1,
    HTML: 1,
  };

  const n = 15;

  return (
    <div className="m-4 flex flex-col">
      <h1 className="bg-slate-700 text-4xl w-full flex justify-center py-3 mb-5 rounded-md">
        Análise Github
      </h1>
      <div className="grid grid-cols-3 grid-flow-row  gap-5">
        <div className="bg-slate-700 rounded-md p-4 flex justify-center items-center">
          <div className="w-full h-full flex items-center justify-center">
            <PieChart
              title="Linguagens principais de repositórios"
              content={langs}
              loading={loading}
            />
          </div>
        </div>
        <div className="gap-5 flex flex-col">
          <div className="bg bg-slate-700 h-1/2 rounded-md p-4 ">
            <div className="w-full h-full flex justify-center flex-col items-center font-bold text-4xl">
              <p>{n}</p>
              <p>repositórios</p>
            </div>
          </div>
          <div className="bg bg-slate-700 h-1/2 rounded-md p-4 ">
            <div className="w-full h-full flex justify-center items-center">
              Outro dado
            </div>
          </div>
        </div>
        <div className="bg-slate-700 rounded-md p-4 flex justify-center items-center">
          <div className="w-full h-full flex items-center justify-center">
            <AreaChart
              content={commits}
              loading={loadingArea}
              title={"Número de commits por mês"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
