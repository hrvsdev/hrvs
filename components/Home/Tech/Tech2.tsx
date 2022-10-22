import Card from "./Card";

export default function Tech() {
  return (
    <section id="tech" className="flex justify-center bg-gradient-to-br from-sky-200 to-blue-200 py-10 mb-8">
      <div className="max-w-5xl w-full">
        <h1 className="dark:text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 sm:mb-3 lg:mb-4">
          Tech Stack & Tools
        </h1>
        <p className="text-slate-800 dark:text-slate-300 text-base md:text-lg leading-7 max-w-xl mb-8 pl-1">
          I like to craft apps with different tools to provide the best experience for
          both Users and Developers.
        </p>
        <div className="flex bg-white/90 backdrop-blur shadow-xl rounded-xl">
          <Card/>
          <Card/>
        </div>
      </div>
    </section>
  );
}
