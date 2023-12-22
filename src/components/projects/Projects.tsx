import { ColoredSpan } from "../common/ColoredSpan";
import { Wrapper } from "../common/Wrapper";
import { ProjectCard } from "./ProjectCard";
import { projectText } from "../../config/cardsConfig";

export const Projects = () => {
  const { cards } = projectText;

  return (
    <Wrapper className="w-full h-full">
      <Wrapper className="w-full flex flex-col items-start justify-center rounded p-5">
        <Wrapper className="flex flex-col w-full justify-center items-center mb-5">

        <ColoredSpan className="text-4xl mt-3 font-bold mb-3">Projetos</ColoredSpan>
        <p className="mb-5 text-xl">
          Aqui estão todos os projetos desenvolvidos ou em desenvolvimento,
          sejam em cursos, projetos reais, etc.
        </p>
        </Wrapper>
        <Wrapper className="w-full grid grid-cols-3 grid-flow-row gap-5">
          {cards.map((card) => (
            <ProjectCard
              title={card.title}
              description={card.description}
              status={card.status}
              tags={card.tags}
            />
          ))}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
