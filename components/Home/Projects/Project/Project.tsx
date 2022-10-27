/* eslint-disable @next/next/no-img-element */
import { IconBrandGithub } from "@tabler/icons";
import Image from "next/image";

export default function Project() {
  return (
    <div className="flex flex-col md:flex-row border shadow-xl rounded-lg bg-white/90 backdrop-blur">
      <div className="flex flex-col md:w-1/2 py-4 px-6">
        <h1 className="text-3xl font-semibold mb-4">Secured Text</h1>
        <p className="mb-2">
          Secured Text is one of the most secure and safe text and notes app on the
          Internet.
        </p>
        <p className="mb-4">
          It uses AES and SHA512 encryption for each network request, making it impossible
          to obtain encrypted data in any way.
        </p>
        <div className="flex gap-3 mt-auto">
          <button className="text-sm text-white bg-blue-500 cursor-pointer rounded-full">
            <a
              className="inline-block py-1 px-3"
              href="https://securedtext.vercel.app"
              target="_blank"
              rel="noreferrer">
              Visit
            </a>
          </button>
          <button className="text-sm text-white bg-blue-500 cursor-pointer rounded-full">
            <a
              className="inline-block py-1 px-3"
              href="https://github.com/hrvsdev/secured-text"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
          </button>
        </div>
      </div>
      <div className="md:w-1/2 aspect-video border-t md:border-t-0 md:border-l">
        <img
          alt="secured-text"
          src="/images/projects/securedtext.png"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
