import Navbar from "../Navbar";
import HeroComp from "./Hero";
import Projects from "./Projects";
import Tech from "./Tech";

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <main>
        <HeroComp />
        <Tech />
        <Projects />
      </main>
    </>
  );
}
