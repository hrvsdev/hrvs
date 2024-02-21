import { IconBrandGithub, IconExternalLink } from "@tabler/icons";

import If from "../../../../Utils/If";

import type { IBadgesProps, ILinksProps, INameProps, IProject } from "./types";

export default function Project(props: IProject) {
  const { name, desc, githubLink, appLink, badges, development } = props;
  return (
    <div className="flex rounded-xl border bg-white/90 shadow-xl backdrop-blur">
      <div className="flex flex-col px-6 py-8 sm:px-8 md:px-6 lg:px-8">
        <Name name={name} development={development || false} />
        <p className="mb-6 leading-7 text-slate-800">{desc}</p>
        <Badges badges={badges} />
        <Links appLink={appLink} githubLink={githubLink} />
      </div>
    </div>
  );
}

function Name({ name, development }: INameProps) {
  return (
    <div className="mb-2 flex items-center justify-between">
      <h1 className="text-xl font-semibold sm:text-2xl md:text-3xl">{name}</h1>
      <If condition={development}>
        <div className="h-fit rounded bg-slate-300 px-2 py-1 text-xs">
          In development
        </div>
      </If>
    </div>
  );
}

function Badges({ badges }: IBadgesProps) {
  return <div className="mb-8 mt-auto flex flex-wrap gap-2">{badges}</div>;
}

function Links({ appLink, githubLink }: ILinksProps) {
  return (
    <div className="mt-auto flex gap-4 text-slate-800">
      <a
        className="transition-transform duration-[50ms] hover:text-blue-600 active:translate-y-0.5"
        href={appLink}
        target="_blank"
        rel="noreferrer"
        title="Visit App"
      >
        <IconExternalLink size="28" stroke="1.5" />
      </a>
      <a
        className="transition-transform duration-[50ms] hover:text-blue-600 active:translate-y-0.5"
        href={githubLink}
        target="_blank"
        rel="noreferrer"
        title="Github Repo"
      >
        <IconBrandGithub size="28" stroke="1.5" />
      </a>
    </div>
  );
}
