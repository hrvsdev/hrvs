import Project from "./Project";

import projects from "./ProjectList";

export default function List() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((e) => {
        return <Project {...e} />;
      })}
    </div>
  );
}
