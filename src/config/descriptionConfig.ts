import { IconDefinition, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";

export type DevData = {
  name: string;
  age: number;
  backend: string[];
  frontend: string[];
  database: string[];
  agile: string[];
  others: string[];
};

type FaIcon = {
  name: string;
  icon: IconDefinition;
};

export type DescriptionText = {
  title: string;
  subtitle: string;
  description: string;
  devData: DevData;
  icons: FaIcon[];
};


const calculateWorktime = () => {
  const millisecondsInMonth = 1000 * 60 * 60 * 24 * 30;

  const worktimeInMilliseconds = Date.now() - new Date("2022-05-01").getTime();
  const worktimeInMonths = Math.floor(
    worktimeInMilliseconds / millisecondsInMonth
  );

  const worktimeInYears = Math.floor(worktimeInMonths / 12);
  const workTimeInMonths = Math.floor(worktimeInMonths % 12);
  return `${worktimeInYears.toFixed(0)} ano(s) e ${workTimeInMonths} mes(es)`;
};

export const descriptionText: DescriptionText = {
  title: "Lucca Motta",
  subtitle: "Desenvolvedor Full Stack",
  description: "Profissional focado em desenvolvimento de software, backend e frontend. Especializado em .NET e ReactJS.",
  icons: [
    {
      name: "github",
      icon: faGithub
    },
    {
      name: "linkedin",
      icon: faLinkedinIn
    },
    {
      name: "instagram",
      icon: faInstagram
    },
  ],
  devData: {
    name: "Lucca",
    age: 23,
    backend: ["ASP.NET", "NodeJS"],
    frontend: ["React", "Vue"],
    database: ["SQL", "MongoDB"],
    agile: ["Kanban", "Scrum"],
    others: ["Linux", "Git", "Docker", "ElasticStack", "Ansible", "RabbitMQ"],
  },
};
