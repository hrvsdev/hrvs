import { IconBrandGithub, IconMail, IconNotes } from "@tabler/icons";

import type { IHeaderButton } from "./types";

export default function Right(): JSX.Element {
  return (
    <div className="flex items-center gap-8 sm:gap-11">
      <HeaderButton href="/hi" name="Contact" Icon={IconMail} />
      <HeaderButton href="/github" name="Github" Icon={IconBrandGithub} />
      <HeaderButton href="/pdf/resume.pdf" name="Resume" Icon={IconNotes} />
    </div>
  );
}

function HeaderButton({ href, name, Icon }: IHeaderButton): JSX.Element {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex gap-1.5 items-center h-9 sm:h-8 text-slate-700 hover:text-blue-600 active:translate-y-0.5 link-underline">
      <Icon className="w-7  h-7 sm:w-6 sm:h-6" />
      <span className="text-lg hidden sm:inline-block">{name}</span>
    </a>
  );
}
