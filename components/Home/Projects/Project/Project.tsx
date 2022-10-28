/* eslint-disable @next/next/no-img-element */
import { IconBrandGithub } from "@tabler/icons";
import Image from "next/image";

export default function Project() {
  return (
    <div className="flex border shadow-xl rounded-xl bg-white/90 backdrop-blur">
      <div className="flex flex-col py-8 px-6 sm:px-6 md:px-8 lg:px-12">
        <h1 className="text-3xl font-semibold mb-2">Secured Text</h1>
        <p className="text-slate-800 mb-8">
          One of the most secure text and notes app on the Internet, Secured Text is the
          best way to save notes and access them from anywhere.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href="https://securedtext.vercel.app"
            target="_blank"
            rel="noreferrer">
            Visit
          </a>
          <a
            href="https://github.com/hrvsdev/secured-text"
            target="_blank"
            rel="noreferrer">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
