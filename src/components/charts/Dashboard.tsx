import { PieChart } from "./PieChart";
import { useGithubContext } from "../../context/github";
import { AreaChart } from "./AreaChart";
import { useEffect, useState } from "react";
import { Commit, Language } from "../../context/githubInterfaces";
import { Wrapper } from "../common/Wrapper";
import { SmallInfo } from "./SmallInfo";
import { ColoredSpan } from "../common/ColoredSpan";

export const Dashboard = () => {
  const { loading, getMonthlyCommitCounts, getLangsCount, getRepoCount } = useGithubContext();
  const [commits, setCommits] = useState<Commit>({
    months: [],
    count: [],
  } as Commit);
  const [loadingArea, setLoadingArea] = useState(true);
  const [languages, setLanguages] = useState<Language>({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoadingArea(true);
  //     try {
  //       const { months, count } = await getMonthlyCommitCounts();
  //       console.log("monthlyCommits:", months);
  //       setCommits({
  //         months: months,
  //         count: count,
  //       });
  //       console.log(commits);
  //       setLoadingArea(false);
  //     } catch (error) {
  //       console.error("Failed to fetch monthly commits:", error);
  //       setLoadingArea(false);
  //     }
  //   };

  //   fetchData();
  // }, [getMonthlyCommitCounts]);

  // useEffect(() => {
  //   const fetchData = () => {
  //     try {
  //       const langs = getLangsCount();
  //       setLanguages(langs);
  //       console.log("monthlyCommits:", langs);
  //     } catch (error) {
  //       console.error("Failed to fetch monthly commits:", error);
  //     }
  //   };

  //   fetchData();
  // }, [getLangsCount]);

  return (
    <Wrapper className="m-4 flex flex-col">
      <h1 className="bg-slate-700 text-4xl w-full flex justify-center py-3 mb-5 rounded-md">
        Dados do github
      </h1>
      <Wrapper className="grid grid-cols-3 grid-flow-row  gap-5">
        <PieChart
          title="Linguagens principais de repositórios"
          content={languages}
          loading={loading}
        />
        <Wrapper className="gap-5 flex flex-col">
          <SmallInfo>
            <ColoredSpan className="flex gap-4 items-center">
              <h1 className="text-4xl">{getRepoCount()}</h1>
              <h3 className="text-3xl">repositórios</h3>
            </ColoredSpan>
          </SmallInfo>
          <div className="bg bg-slate-700 h-1/2 rounded-md p-4 ">
            <div className="w-full h-full flex justify-center items-center">
              Outro dado
            </div>
          </div>
        </Wrapper>
        <div className="bg-slate-700 rounded-md p-4 flex justify-center items-center">
          <div className="w-full h-full flex items-center justify-center">
            <AreaChart
              labels={commits.months}
              counts={commits.count}
              loading={loadingArea}
              title={"Número de commits por mês"}
            />
          </div>
        </div>
      </Wrapper>
    </Wrapper>
  );
};
