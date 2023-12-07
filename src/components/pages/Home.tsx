import { Container } from "../common/Container";
import { NavBar } from "../common/NavBar";
import { SocialMedia } from "../social/SocialMedia";
import { Description } from "../description/Description";
import { PieGraph } from "../common/PieGraph";

export const Home = () => {
  return (
    <>
      {/* <SocialMedia /> */}
      <NavBar />
      <Container bgColor="bg-gray-950">
        <div className="w-full my-44 h-3/6">
          <Description />
        </div>
      </Container>
      <Container bgColor="bg-gray-800">
        <div className="grid grid-cols-3 gap-10 p-10">
          <div className="bg-slate-700 rounded-lg p-3 flex flex-col gap-2 w-100 h-52 justify-center">
            <PieGraph />
          </div>
          <div className="bg-slate-700 rounded-lg p-3 flex flex-col gap-2 w-100 h-52 justify-center">
            <PieGraph />
          </div>
          <div className="bg-slate-700 rounded-lg p-3 flex flex-col gap-2 w-100 h-52 justify-center">
            <PieGraph />
          </div>
        </div>
      </Container>
      <Container bgColor="bg-gray-950">
        <div className="w-full h-screen">
          <div className="w-full flex flex-col items-start justify-center rounded p-5">
            <h1 className="text-2xl mt-3 font-bold ">Projetos</h1>
            <p className="mb-5 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus, adipisci!
            </p>
            <div className="grid grid-cols-3 gap-10">
              <div className="bg-slate-700 rounded-lg p-3 flex flex-col gap-2">
                <h1 className="text-2xl bg-slate-900 p-2 rounded-md font-bold text-center">
                  Projeto 1
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor, eum?
                </p>
                <button className="ml-auto rounded-md bg-blue-400 text-blue-700 font-bold px-4 py-3">
                  Visitar
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/*
            text-yellow-600
            text-green-300
            bg-slate-900
            text-gray-500
            text-purple-400
            text-blue-400
    */}
    </>
  );
};
