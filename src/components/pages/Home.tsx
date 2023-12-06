import { Container } from "../common/Container";
import { NavBar } from "../common/NavBar";
import { Description } from "../Description/Description";

export const Home = () => {

  return (
    <Container>
      <NavBar />
      <div className="w-full h-3/6">
        <div className="mt-10 bg-transparent flex justify-around rounded-lg h-full items-center">
          <Description />
        </div>
      </div>
    </Container>
  );
};
