import { IconBrandGithub, IconExternalLink } from "@tabler/icons";

import If from "../../../../Utils/If";

import BadgeJS from "../../../../Badges/Chips/JS";
import BadgeTS from "../../../../Badges/Chips/TS";
import BadgeReact from "../../../../Badges/Chips/React";

import type { IProject } from "./types";

export default function Project(props: IProject) {
  const { name, desc, githubLink, appLink, development } = props;
  return (
    <div className="flex border shadow-xl rounded-xl bg-white/90 backdrop-blur">
      <div className="flex flex-col py-8 px-6 sm:px-8 md:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">{name}</h1>
          <If condition={development}>
            <div className="text-xs bg-slate-300 h-fit rounded py-1 px-2">
              In development
            </div>
          </If>
        </div>
        <p className="text-slate-800 leading-7 mb-8">{desc}</p>
        <div className="flex gap-2">
        <BadgeJS/>
        <BadgeTS/>
        <BadgeReact/>
        </div>
        <div className="text-slate-800 flex gap-4 mt-auto">
          <a
            className="hover:text-blue-600 active:translate-y-0.5 transition-transform duration-[50ms]"
            href={appLink}
            target="_blank"
            rel="noreferrer"
            title="Visit App">
            <IconExternalLink size="28" stroke="1.5" />
          </a>
          <a
            className="hover:text-blue-600 active:translate-y-0.5 transition-transform duration-[50ms]"
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            title="Github Repo">
            <IconBrandGithub size="28" stroke="1.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
