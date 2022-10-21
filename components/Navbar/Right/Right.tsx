import { IconBrandGithub, IconMail, IconNotes } from "@tabler/icons";

import type { IHeaderButton } from "./types";

export default function Right(): JSX.Element {
  return (
    <div className="flex items-center gap-8 sm:gap-11">
      <HeaderButton href="/hi" name="Contact" Icon={IconMail} />
      <HeaderButton href="/github" name="Github" Icon={IconBrandGithub} />
      <HeaderButton href="/resume" name="Resume" Icon={IconNotes} />
    </div>
  );
}

function HeaderButton({ href, name, Icon }: IHeaderButton): JSX.Element {
  return (
    <a
      href={href}
      className="flex gap-1.5 items-center h-9 sm:h-8 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white active:translate-y-0.5 link-underline">
      <Icon className="w-7  h-7 sm:w-6 sm:h-6"/>
      <span className="text-lg hidden sm:inline-block">{name}</span>
    </a>
  );
}
