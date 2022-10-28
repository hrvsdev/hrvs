import Heading from "./Heading";
import Project from "./Project";

export default function Projects() {
  return (
    <section className="flex justify-center py-10 px-6 bg-gradient-to-br from-blue-400 to-sky-400">
      <div className="max-w-5xl w-full">
        <Heading />
        <div className="grid grid-cols-2 gap-4">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
    </section>
  );
}
