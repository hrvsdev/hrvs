import List from "./List";

import { IconDeviceDesktopAnalytics } from "@tabler/icons";

import type { ICard } from "./types";

export default function Card(props: ICard) {
  // Destructuring Props
  const { Icon, mainSkillType, skillDesc, subSkillsList } = props;

  return (
    <div className="flex flex-col items-center grow py-8 px-8 sm:px-6 md:px-8 lg:px-12 shadow-xl rounded-xl bg-white/90 backdrop-blur">
      <div className="text-blue-900 bg-blue-100 w-fit rounded-full p-4 mb-6">
        <Icon stroke="1.5" size="45" />
      </div>
      <h2 className="text-blue-700 text-xl sm:text-2xl  font-semibold mb-3">
        {mainSkillType}
      </h2>
      <p className="text-center tracking-wide mb-6">{skillDesc}</p>
      <List subSkillsList={subSkillsList} />
    </div>
  );
}
