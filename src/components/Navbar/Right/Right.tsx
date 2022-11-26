import IGithub from "../../Icons/Github"
import IMail from "../../Icons/Mail"
import IResume from "../../Icons/Resume"

import type { IHeaderButton } from "./types";

export default function Right() {
  return (
    <div class="flex items-center gap-8 sm:gap-11">
      <HeaderButton href="/hi" name="Contact" Icon={IMail} />
      <HeaderButton href="/github" name="Github" Icon={IGithub} />
      <HeaderButton href="/pdf/resume.pdf" name="Resume" Icon={IResume} />
    </div>
  );
}

function HeaderButton({ href, name, Icon }: IHeaderButton) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      class="flex gap-1.5 items-center h-9 sm:h-8 text-slate-700 hover:text-blue-600 active:translate-y-0.5 link-underline">
      <Icon className="w-7 h-7 sm:w-6 sm:h-6" />
      <span class="text-lg hidden sm:inline-block">{name}</span>
    </a>
  );
}
