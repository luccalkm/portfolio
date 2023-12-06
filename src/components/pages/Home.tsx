import { Container } from "../common/Container";
import { NavBar } from "../common/NavBar";
import { Description } from "../Description/Description";

export const Home = () => {

  return (
    <Container>
      <NavBar />
      <div className="w-full h-3/6 flex">
        <div className="mt-10 bg-transparent flex justify-around rounded-lg h-full items-center">
          <Description />
          <div className="w-5/12 h-2/3 flex justify-center flex-col p-2">
            <div className="flex w-2/6 flex-col mb-3">
              <h1 className="text-4xl font-bold">Titulo Um</h1>
              <h3 className="text-xl font-semibold">Subtitulo</h3>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, unde. Numquam eum voluptate quas suscipit aliquam
              repudiandae error sequi placeat?
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};
