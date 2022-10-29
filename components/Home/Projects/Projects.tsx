import Heading from "./Heading";
import List from "./List";

export default function Projects() {
  return (
    <section className="flex justify-center py-12 px-6 bg-gradient-to-br from-sky-500 to-blue-600">
      <div className="max-w-5xl w-full">
        <Heading />
        <List/>
      </div>
    </section>
  );
}
