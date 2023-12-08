export interface Repository {
  name: string;
}

export interface Commit {
  months: string[];
  count: number[];
}

export interface Language {
  [key: string]: number;
}