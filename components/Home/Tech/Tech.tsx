import Heading from "./Heading";
import Skills from "./Skills";

export default function Tech() {
  return (
    <section
      id="tech"
      className="flex justify-center bg-gradient-to-br from-sky-200 to-blue-200 py-10 px-6 mb-8">
      <div className="max-w-5xl w-full">
        <Heading />
        <Skills />
      </div>
    </section>
  );
}
