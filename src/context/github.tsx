import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import agent from "../config/agent";
import { Repository } from "./repos";

interface ContextProps {
  getLangsCount: () => { [key: string]: number };
  loading: boolean;
  getRepoCount: () => number;
  getMonthlyCommitCounts: () => Promise<{ [key: string]: number }>;
}

interface Props {
  children: ReactNode;
}

const GithubContext = createContext<ContextProps | undefined>(undefined);

const useGithubContext = () => {
  const context = useContext(GithubContext);
  if (context === undefined) {
    throw new Error("useGithubContext must be used within a GithubProvider");
  }
  return context;
};

const GithubProvider = ({ children }: Props) => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchRepos = async () => {
      try {
        const response = await agent.Repos.list();
        setRepos(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getLangsCount = (): { [key: string]: number } => {
    const langs = repos.reduce((prev: any, curr: any) => {
      const lang = curr.language;
      if (lang) prev[lang] = (prev[lang] || 0) + 1;
      else prev["Others"] = (prev["Others"] || 0) + 1;
      return prev;
    }, {});
    return langs;
  };

  const getRepoCount = (): number => {
    return repos.length;
  };

  const getMonthlyCommitCounts = async (): Promise<{
    [key: string]: number;
  }> => {
    try {
      let monthlyCommits: { [key: string]: number } = {};

      const commitPromises = repos.map((repo) =>
        agent.Repos.commits(repo.name).catch((error) => {
          console.error(`Error fetching commits for repo: ${repo.name}`, error);
          return [];
        })
      );

      const allCommits = await Promise.all(commitPromises);

      allCommits.forEach((commits: any[]) => {
        commits.forEach((commit: any) => {
          const commitDate = new Date(commit.commit.author.date);
          const yearMonth = `${commitDate.getFullYear()}-${String(
            commitDate.getMonth() + 1
          ).padStart(2, "0")}`;
          monthlyCommits[yearMonth] = (monthlyCommits[yearMonth] || 0) + 1;
        });
      });

      console.log(monthlyCommits);

      return monthlyCommits;
    } catch (error) {
      console.error(error);
      return {};
    }
  };

  return (
    <GithubContext.Provider
      value={{ getMonthlyCommitCounts, getRepoCount, getLangsCount, loading }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, useGithubContext };
