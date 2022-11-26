import Heading from "./Heading";
import Skills from "./Skills";

export default function Tech() {
  return (
    <section
      id="tech"
      class="flex justify-center bg-gradient-to-br from-sky-200 to-blue-300 py-12 px-6">
      <div class="max-w-5xl w-full">
        <Heading />
        <Skills />
      </div>
    </section>
  );
}
