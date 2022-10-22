import type { IList } from "./types";

export default function List({ subSkillsList }: IList): JSX.Element {
  return (
    <div className="flex flex-col gap-1">
      {subSkillsList.map(({ name, skills }) => (
        <>
          <h3 className="text-lg text-blue-600 font-medium">{name}</h3>
          <ul className="text-center mb-8 leading-relaxed">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
}
