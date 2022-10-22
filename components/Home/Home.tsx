import Navbar from "../Navbar";
import HeroComp from "./Hero";
import Tech from "./Tech";

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <main>
        <HeroComp />
        <Tech/>
      </main>
    </>
  );
}
