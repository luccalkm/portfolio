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
  description: {};
  devData: DevData;
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
  description: {
    1: "Estou em busca de desafios profissionais em uma empresa que valorize o crescimento de sua equipe e estimule a constante evolução.",
    2: `Tenho ${calculateWorktime()} anos de experiência como desenvolvedor e estou pronto para aplicar meu conhecimento em projetos que envolvam o ciclo completo de desenvolvimento de software, abrangendo front-end, back-end e a configuração de servidores.`,
    3: "Meu compromisso é contribuir para o progresso da empresa, enquanto continuo aprimorando minhas habilidades e conhecimentos como desenvolvedor.",
  },
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
