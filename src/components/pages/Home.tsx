import { GithubProvider } from "../../context/github";
import { Container } from "../common/Container";
import { NavBar } from "../common/NavBar";
import { Wrapper } from "../common/Wrapper";
// import { SocialMedia } from "../social/SocialMedia";
import { Description } from "../description/Description";
import { Dashboard } from "../charts/Dashboard";
import { ColoredSpan } from "../common/ColoredSpan";
import { ProjectCard } from "../projects/ProjectCard";
import { Projects } from "../projects/Projects";

export const Home = () => {
  return (
    <>
      {/* <SocialMedia /> */}
      <NavBar />
      <Container bgColor="bg-gray-950">
        <Wrapper className="w-full my-44 h-3/6">
          <Description />
        </Wrapper>
      </Container>
      {/* <Container bgColor="bg-gray-800">
        <GithubProvider>
          <Dashboard />
        </GithubProvider>
      </Container> */}
      <Container bgColor="bg-gray-950">
        <Projects />
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
