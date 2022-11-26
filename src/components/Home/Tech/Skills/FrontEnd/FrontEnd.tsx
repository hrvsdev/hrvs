import IFrontEnd from "../../../../Icons/FrontEnd"

export default function FrontEnd() {
  return (
    <div class="flex flex-col items-center grow py-8 px-8 sm:px-6 md:px-8 lg:px-12 shadow-xl rounded-xl bg-white/90 backdrop-blur">
      <div class="text-blue-900 bg-blue-100 w-fit rounded-full p-4 mb-6">
        <IFrontEnd strokeWidth="1.5" size="45" />
      </div>
      <h2 class="text-blue-700 text-xl font-semibold mb-3">Front End & UI</h2>
      <p class="text-center tracking-wide mb-6">
        I like to create simple, helpful and user friendly UI with Industry standard tools.
      </p>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col items-center gap-1">
          <h3 class="text-lg text-blue-600 font-medium">Languages I Know</h3>
          <ul class="text-center leading-relaxed tracking-wide">
            <li>HTML</li>
            <li>CSS & Sass</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div class="flex flex-col items-center gap-1">
          <h3 class="text-lg text-blue-600 font-medium">
            Libraries & Frameworks
          </h3>
          <ul class="text-center leading-relaxed tracking-wide">
            <li>React</li>
            <li>React Native</li>
            <li>Next.js</li>
            <li>Svelte</li>
            <li>Solid.js</li>
          </ul>
        </div>
        <div class="flex flex-col items-center gap-1">
          <h3 class="text-lg text-blue-600 font-medium">Other Tools</h3>
          <ul class="text-center leading-relaxed tracking-wide">
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
