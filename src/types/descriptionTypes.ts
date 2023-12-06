export type DevData = {
  name: string;
  age: number;
  backend: string[];
  frontend: string[];
  database: string[];
  agile: string[];
  others: string[];
};

export type DescriptionText = {
  title: string;
  subtitle: string;
  description: string;
  devData: DevData;
};
