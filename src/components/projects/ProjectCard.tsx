interface Props {
  title: string;
  description: string;
}

export const ProjectCard = ({ title, description }: Props) => {
  return (
    <div className="w-full h-full">

    <div className="bg-slate-700 rounded-lg p-3 flex flex-col gap-2">
      <h1 className="text-2xl bg-slate-900 p-2 rounded-md font-bold text-center">
        {title}
      </h1>
      <p>
        {description}
      </p>
      <button className="ml-auto rounded-md bg-blue-400 text-blue-700 font-bold px-4 py-3">
        Visitar
      </button>
    </div>
    </div>
  );
};
