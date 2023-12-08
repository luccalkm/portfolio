import { ColoredSpan } from "../common/ColoredSpan";
import { Wrapper } from "../common/Wrapper";
import { ProjectCard } from "./ProjectCard";
import { projectText } from "../../config/cardsConfig";

export const Projects = () => {
  const { cards } = projectText;

  return (
    <Wrapper className="w-full h-full">
      <Wrapper className="w-full flex flex-col items-start justify-center rounded p-5">
        <ColoredSpan className="text-2xl mt-3 font-bold ">Projetos</ColoredSpan>
        <p className="mb-5 ">
          Aqui estão todos os projetos desenvolvidos ou em desenvolvimento,
          sejam em cursos, projetos reais, etc.
        </p>
        <Wrapper className="w-full grid grid-cols-3 grid-flow-row gap-5">
          {cards.map((card) => (
            <ProjectCard
              title={card.title}
              description={card.description}
            />
          ))}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
