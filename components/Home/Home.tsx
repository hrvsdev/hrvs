import Navbar from "../Navbar";
import HeroComp from "./Hero";
import Tech from "./Tech";
import Tech2 from "./Tech/Tech2";

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <main className="dark:bg-slate-900">
        <HeroComp />
        <Tech2/>
      </main>
    </>
  );
}
