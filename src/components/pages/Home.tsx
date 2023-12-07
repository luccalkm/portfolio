import { Container } from "../common/Container";
import { NavBar } from "../common/NavBar";
import { SocialMedia } from "../Social/SocialMedia";
import { Description } from "../Description/Description";

export const Home = () => {
  return (
    <>
      <SocialMedia />
      <Container bgColor="bg-gray-950">
        <NavBar />
        <div className="w-full my-28 h-3/6">
          <Description />
        </div>
      </Container>
      <Container bgColor="bg-gradient-to-b from-gray-950 from-20% to-gray-700">
        <div className="w-full h-screen">
          <div>
<h1>Projetos</h1>
          </div>
        </div>
      </Container>
    </>
  );
};
