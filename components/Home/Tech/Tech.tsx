export default function Tech() {
  return (
    <section id="tech" className="flex justify-center mb-8">
      <div className="max-w-5xl w-full">
        <h1 className="dark:text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 sm:mb-3 lg:mb-4">
          Tech Stack & Tools
        </h1>
        <p className="text-slate-800 dark:text-slate-300 text-base md:text-lg leading-7 max-w-xl mb-8 pl-1">
          I like to craft apps with different tools to provide the best experience for
          both Users and Developers.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="h-96 rounded-xl border dark:border-slate-700"></div>
          <div className="h-96 rounded-xl border dark:border-slate-700"></div>
          <div className="h-96 rounded-xl border dark:border-slate-700"></div>
        </div>
      </div>
    </section>
  );
}
