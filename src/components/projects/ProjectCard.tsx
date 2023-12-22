import { Badge } from "../common/Badge";
import { Wrapper } from "../common/Wrapper";

interface Props {
  title: string;
  description: string;
  status: string;
  tags: string[];
}

export const ProjectCard = ({ title, description, status, tags }: Props) => {
  const filterStatus = (status: string) => {
    switch (status) {
      case "Em desenvolvimento":
        return "sky";
      case "Finalizado":
        return "emerald";
      case "Pausado":
        return "red";
      case "Arquivado":
        return "gray";
      case "Planejamento":
        return "yellow";
      default:
        "gray";
    }
  };

  return (
    <div className="w-full h-full">
      <div className="bg-slate-700 rounded-lg p-3 flex flex-col gap-2 h-full">
        <h1 className="text-2xl bg-slate-900 px-2 pl-4 py-2 rounded-md font-bold text-center flex justify-between">
          {title}
          <Badge
            inverted={true}
            text={status}
            color={filterStatus(status)!}
            className={"text-sm"}
          />
        </h1>
        <Wrapper className="flex flex-col gap-2">
          <div className="flex gap-2">
            {tags.map((tag) => (
              <Badge
                text={tag}
                color="gray"
                className="text-sm"
                inverted={true}
              />
            ))}
          </div>
          {/* <p>{description}</p> */}
        </Wrapper>
        <button className="ml-auto rounded-md mt-5 bg-blue-400 text-blue-700 font-bold px-4 py-3">
          Visitar
        </button>
      </div>
    </div>
  );
};
