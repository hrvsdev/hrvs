import Navbar from "../Navbar";
import HeroComp from "./Hero";
import Tech from "./Tech";

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <main className="px-6 dark:bg-slate-900">
        <HeroComp />
        <Tech/>
      </main>
    </>
  );
}
