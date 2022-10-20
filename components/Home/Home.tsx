import Navbar from "../Navbar";
import HeroComp from "./Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-6">
        <HeroComp />
      </main>
    </>
  );
}
