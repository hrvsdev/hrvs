import Heading from "./Heading";
import Project from "./Project";

export default function Projects() {
  return (
    <section className="flex justify-center py-10 px-6">
      <div className="max-w-5xl w-full">
        <Heading />
        <Project />
      </div>
    </section>
  );
}
