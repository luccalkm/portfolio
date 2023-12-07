import { ReactNode, createContext, useEffect, useState } from "react";

// Assuming you have defined these interfaces somewhere
import { GithubContextProps, DEFAULT_VALUE } from "../interfaces/githubResponse";

const GithubContext = createContext<GithubContextProps>(DEFAULT_VALUE);

interface Props {
    children: ReactNode;
}

const GithubProvider = ({ children }: Props) => {
  const [projects, setProjects] = useState<Project[]>([]); 
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  }, []);

  return (
    <GithubContext.Provider value={{ projects, repos, loading }}>
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext }
