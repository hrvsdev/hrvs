import Heading from "./Heading";
import Project from "./Project";

export default function Projects() {
  return (
    <section className="flex justify-center bg-gradient-to-br from-sky-500 to-blue-500 py-10 px-6">
      <div className="max-w-5xl w-full">
        <Heading />
        <Project />
      </div>
    </section>
  );
}
