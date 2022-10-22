import { IconDeviceDesktopAnalytics } from "@tabler/icons";

export default function Card() {
  return (
    <div className="flex flex-col items-center grow py-8 px-12 border-l first:border-none border-l-slate-300 dark:border-l-slate-700">
      <div className="bg-blue-100 w-fit rounded-full p-4 mb-6">
        <IconDeviceDesktopAnalytics stroke="1.5" size="45" />
      </div>
      <h2 className="text-blue-700 text-2xl font-bold mb-3">Front End & UI</h2>
      <p className="font-medium text-center tracking-wide mb-6">
        I like to create simple, helpful and user friendly UI with the best suite of tools.
      </p>
      <h3 className="text-lg text-blue-600 font-medium mb-1">Languages I Know</h3>
      <ul className="font-medium text-center mb-8 leading-relaxed">
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
      </ul>
      <h3 className="text-lg text-blue-600 font-medium mb-1">UI Frameworks</h3>
      <ul className="font-medium text-center mb-8 leading-relaxed">
        <li>React</li>
        <li>Next.js</li>
        <li>Svelte</li>
        <li>Solid.js</li>
      </ul>
      <h3 className="text-lg text-blue-600 font-medium mb-1">Styling Tools</h3>
      <ul className="font-medium text-center mb-8 leading-relaxed">
        <li>Sass</li>
        <li>Tailwind CSS</li>
        <li>Bulma</li>
        <li>Bootstrap</li>
        <li>MUI</li>
        <li>Ant Design</li>
      </ul>
    </div>
  );
}
