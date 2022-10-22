import Card from "./Card";

export default function Tech() {
  return (
    <section id="tech" className="flex justify-center mb-8">
      <div className="max-w-5xl w-full">
        <h1 className="dark:text-white text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 sm:mb-3 lg:mb-4">
          Tech Stack & Tools
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-7 max-w-xl mb-8 pl-1">
          I like to craft apps with different tools to provide the best experience for
          both Users and Developers.
        </p>
        <h2 className="text-3xl font-semibold mb-2">Front End & UI</h2>
        <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-7 max-w-xl mb-6">
          I like to create simple, helpful and user friendly UI with the best suite of
          tools.
        </p>
        <h3 className="text-lg font-semibold">Languages I Know:</h3>
        <p className="text-slate-600 dark:text-slate-300 text-base leading-7 max-w-xl mb-4">
          Langauges are used to write a program or app.
        </p>
        <div className="flex gap-4 font-medium mb-8">
          <div className="bg-slate-100 rounded-full py-2 px-5">HTML</div>
          <div className="bg-slate-100 rounded-full py-2 px-5">CSS</div>
          <div className="bg-slate-100 rounded-full py-2 px-5">JavaScript</div>
          <div className="bg-slate-100 rounded-full py-2 px-5">TypeScript</div>
          <div className="bg-slate-100 rounded-full py-2 px-5">Dart</div>
        </div>
        <h3 className="text-lg font-semibold">UI Libraries and Frameworks:</h3>
        <p className="text-slate-600 dark:text-slate-300 text-base leading-7 max-w-xl mb-4">
          UI Libraries and Frameworks makes easier to build a high dynamic apps.
        </p>
        <div className="flex gap-4 font-medium mb-8">
          <div className="bg-slate-100 rounded-full py-2 px-5">React</div>
          <div className="bg-slate-100 rounded-full py-2 px-5">React Native</div>
          <div className="bg-slate-100 rounded-full py-2 px-5">Next.js</div>
          <div className="bg-slate-100 rounded-full py-2 px-5">Svelte</div>
          <div className="bg-slate-100 rounded-full py-2 px-5">Solid.js</div>
          <div className="bg-slate-100 rounded-full py-2 px-5">Flutter</div>
        </div>
        <h3 className="text-lg font-semibold">Styling Tools</h3>
        <p className="text-slate-600 dark:text-slate-300 text-base leading-7 max-w-xl mb-4">
          Styling is hard but these awesome help me to create beautiful apps.
        </p>
        <div className="flex gap-4 font-medium mb-8">
          <div className="bg-slate-100 rounded-full py-2 px-5">Sass</div>
          <div className="bg-slate-100 rounded-full py-2 px-5">Tailwind CSS</div>
          <div className="bg-slate-100 rounded-full py-2 px-5">Bulma</div>
          <div className="bg-slate-100 rounded-full py-2 px-5">Bootstrap</div>
          <div className="bg-slate-100 rounded-full py-2 px-5">MUI</div>
          <div className="bg-slate-100 rounded-full py-2 px-5">Ant Design</div>
        </div>
      </div>
    </section>
  );
}
