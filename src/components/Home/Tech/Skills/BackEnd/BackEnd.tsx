import IBackEnd from "../../../../Icons/BackEnd"

export default function BackEnd() {
  return (
    <div class="flex flex-col items-center grow py-8 px-8 sm:px-6 md:px-8 lg:px-12 shadow-xl rounded-xl bg-white/90 backdrop-blur">
      <div class="text-blue-900 bg-blue-100 w-fit rounded-full p-4 mb-6">
        <IBackEnd strokeWidth="1.5" size="45" />
      </div>
      <h2 class="text-blue-700 text-xl font-semibold mb-3">Back End</h2>
      <p class="text-center tracking-wide mb-6">
        Creating secure apps & faster integration with all the services is what I choose.
      </p>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col items-center gap-1">
          <h3 class="text-lg text-blue-600 font-medium">Runtimes</h3>
          <ul class="text-center leading-relaxed tracking-wide">
            <li>Node.js</li>
            <li>Deno</li>
          </ul>
        </div>
        <div class="flex flex-col items-center gap-1">
          <h3 class="text-lg text-blue-600 font-medium">
           Frameworks
          </h3>
          <ul class="text-center leading-relaxed tracking-wide">
            <li>Express</li>
            <li>Fastify</li>
            <li>Hapi</li>
          </ul>
        </div>
        <div class="flex flex-col items-center gap-1">
          <h3 class="text-lg text-blue-600 font-medium">Databases</h3>
          <ul class="text-center leading-relaxed tracking-wide">
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div class="flex flex-col items-center gap-1">
          <h3 class="text-lg text-blue-600 font-medium">Other Tools</h3>
          <ul class="text-center leading-relaxed tracking-wide">
            <li>Firebase</li>
            <li>Heroku</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
