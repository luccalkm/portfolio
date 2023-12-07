export interface GithubContextProps {
  id: number | null;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number | null;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string | null;
  fork: boolean;
  url: string;
  // ... all other fields
  homepage: string | null;
  size: number | null;
  stargazers_count: number | null;
  watchers_count: number | null;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number | null;
  mirror_url: string | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number | null;
  license: string | null;
  forks: number | null;
  open_issues: number | null;
  watchers: number | null;
  default_branch: string;
}

export const DEFAULT_VALUE: GithubContextProps = {
  id: null,
  node_id: "",
  name: "",
  full_name: "",
  private: false,
  owner: {
    login: "",
    id: null,
    node_id: "",
    avatar_url: "",
    gravatar_id: "",
    url: "",
    html_url: "",
    followers_url: "",
    following_url: "",
    gists_url: "",
    starred_url: "",
    subscriptions_url: "",
    organizations_url: "",
    repos_url: "",
    events_url: "",
    received_events_url: "",
    type: "",
    site_admin: false,
  },
  html_url: "",
  description: null,
  fork: false,
  url: "",
  // ... all other fields with appropriate default values
  homepage: null,
  size: null,
  stargazers_count: null,
  watchers_count: null,
  language: "",
  has_issues: false,
  has_projects: false,
  has_downloads: false,
  has_wiki: false,
  has_pages: false,
  forks_count: null,
  mirror_url: null,
  archived: false,
  disabled: false,
  open_issues_count: null,
  license: null,
  forks: null,
  open_issues: null,
  watchers: null,
  default_branch: "",
};
