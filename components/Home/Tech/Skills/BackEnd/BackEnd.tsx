import { IconServerCog } from "@tabler/icons";

export default function BackEnd() {
  return (
    <div className="flex flex-col items-center grow py-8 px-8 sm:px-6 md:px-8 lg:px-12 shadow-xl rounded-xl bg-white/90 backdrop-blur">
      <div className="text-blue-900 bg-blue-100 w-fit rounded-full p-4 mb-6">
        <IconServerCog stroke="1.5" size="45" />
      </div>
      <h2 className="text-blue-700 text-xl font-semibold mb-3">Back End & Other Tools</h2>
      <p className="text-center tracking-wide mb-6">
        Creating secure apps & faster intergration with all the services is what I choose.
      </p>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg text-blue-600 font-medium mb-1">Languages I Know</h3>
            <ul className="text-center leading-relaxed tracking-wide">
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-blue-600 font-medium mb-1">Languages I Know</h3>
            <ul className="text-center leading-relaxed tracking-wide">
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-blue-600 font-medium mb-1">Languages I Know</h3>
            <ul className="text-center leading-relaxed tracking-wide">
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
