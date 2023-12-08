type CardInfo = {
  title: string;
  tags: string[];
  description: string;
  status: string;
};

interface Card {
  cards: CardInfo[];
}

enum CardStatus {
  inProgress = "Em desenvolvimento",
  finished = "Finalizado",
  paused = "Pausado",
  archived = "Arquivado",
  planning = "Planejamento",
}

export const projectText: Card = {
  cards: [
    {
      title: "ActivitesApp",
      tags: ["ASP.NET", "ReactJS", "SQL", "EntityFramework"],
      description:
        "Uma aplicação web feita para gerenciar atividades como em uma rede social. É possível registrar-se, logar, criar, editar e excluir atividades, além de poder ver as atividades de outros usuários e juntar-se à elas. Há também comentários nas atividades, etc.",
      status: CardStatus.paused,
    },
    {
      title: "OnionPlanilhas",
      tags: ["ASP.NET", "ReactJS", "SQL", "EntityFramework"],
      description:
        "Uma aplicação simples feita com o intuito de introduzir conceitos no desenvolvimento, o aprendizado com bibliotecas de gráficos e planilhas. A aplicação é capaz de gerar gráficos a partir de uma planilha modelo disponibilizada. Possui versão mobile e desktop.",
      status: CardStatus.finished,
    },
    {
      title: "Bid Wheels",
      tags: ["ASP.NET", "MongoDB", "RabbitMQ", "ReactJS", "EntityFramework", "Docker", "PostgreSQL"],
      description:
        "Uma aplicação feita para desenvolver um sistema de leilão de carros. É possível cadastrar seu usuário, logar, criar, editar e excluir leilões, além de poder dar lances nos leilões de outros usuários. Há também comentários nos leilões, etc. O foco desse projeto é a arquitetura de microsserviços!.",
      status: CardStatus.paused,
    },
    {
      title: "E-commerce ",
      tags: ["ASP.NET", "ReactJS", "SQL", "EntityFramework", "RabbitMQ", "Docker"],
      description: "Uma aplicação de um ecommerce simples, com cadastro de produtos, carrinho de compras, etc. Possui também uma tela de admin com dashboards para acompanhamento de vendas e gerenciamento de produtos. Uma aplicação grande que envolve microsserviços e arquitetura de software.",
        status: CardStatus.planning,
    },
  ],
};
