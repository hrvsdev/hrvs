/* eslint-disable @next/next/no-img-element */
import { IconBrandGithub, IconExternalLink } from "@tabler/icons";

export default function Project() {
  return (
    <div className="flex border shadow-xl rounded-xl bg-white/90 backdrop-blur">
      <div className="flex flex-col py-8 px-6 sm:px-8 md:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold mb-2">Secured Text</h1>
        <p className="text-slate-800 leading-7 mb-8">
          One of the most secure text and notes app on the Internet, Secured Text is the
          best way to save notes and access them from anywhere.
        </p>
        <div className="text-slate-800 flex gap-4">
          <a
            className="hover:text-black active:translate-y-0.5 transition-transform duration-[50ms]"
            href="https://securedtext.vercel.app"
            target="_blank"
            rel="noreferrer"
            title="Visit App">
            <IconExternalLink size="26" stroke="1.5" />
          </a>
          <a
            className="hover:text-black active:translate-y-0.5 transition-transform duration-[50ms]"
            href="https://github.com/hrvsdev/secured-text"
            target="_blank"
            rel="noreferrer"
            title="Github Repo">
            <IconBrandGithub size="26" stroke="1.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
