import { Show } from "solid-js"

import IExternal from "../../../../Icons/External"
import IGithub from "../../../../Icons/Github"

import type { IBadgesProps, ILinksProps, INameProps, IProject } from "./types"

export default function Project(props: IProject) {
  const { name, desc, githubLink, appLink, badges, development } = props
  return (
    <div class="flex border shadow-xl rounded-xl bg-white/90 backdrop-blur">
      <div class="flex flex-col py-8 px-6 sm:px-8 md:px-6 lg:px-8">
        <Name name={name} development={development || false} />
        <p class="text-slate-800 leading-7 mb-6">{desc}</p>
        <Badges badges={badges} />
        <Links appLink={appLink} githubLink={githubLink} />
      </div>
    </div>
  )
}

function Name({ name, development }: INameProps) {
  return (
    <div class="flex justify-between items-center mb-2">
      <h1 class="text-xl sm:text-2xl md:text-3xl font-semibold">{name}</h1>
      <Show when={development}>
        <div class="text-xs bg-slate-300 h-fit rounded py-1 px-2">In development</div>
      </Show>
    </div>
  )
}

function Badges({ badges }: IBadgesProps) {
  return <div class="flex flex-wrap gap-2 mb-8">{badges}</div>
}

function Links({ appLink, githubLink }: ILinksProps) {
  return (
    <div class="text-slate-800 flex gap-4 mt-auto">
      <a
        class="hover:text-blue-600 active:translate-y-0.5 transition-transform duration-[50ms]"
        href={appLink}
        target="_blank"
        rel="noreferrer"
        title="Visit App">
        <IExternal size="28" strokeWidth="1.5" />
      </a>
      <a
        class="hover:text-blue-600 active:translate-y-0.5 transition-transform duration-[50ms]"
        href={githubLink}
        target="_blank"
        rel="noreferrer"
        title="Github Repo">
        <IGithub size="28" strokeWidth="1.5" />
      </a>
    </div>
  )
}
