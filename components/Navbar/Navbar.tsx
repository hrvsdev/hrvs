import Link from "next/link";

import { IconBrandGithub, IconMail, IconNotes } from "@tabler/icons";

export default function Navbar() {
  return (
    <nav className="fixed flex justify-center items-center h-20 sm:h-24 px-6 border-b border-gray-100 w-full">
      <div className="flex justify-between items-center pl-1 max-w-5xl w-full">
        <Link href="/">
          <a className="text-xl font-bold w-12 h-12 flex items-center justify-center border-2 border-black rounded-full">
            HV
          </a>
        </Link>
        <div className="flex items-center gap-8 sm:gap-11">
          <a
            href="/hi"
            className="text-gray-700 hover:text-black transition-all sm:transition-none active:translate-y-0.5">
            <span className="text-lg hidden sm:inline-block link-underline">Contact</span>
            <IconMail className="sm:hidden" size="28"/>
          </a>
          <a
            href="/github"
            className="text-gray-700 hover:text-black transition-all sm:transition-none active:translate-y-0.5">
            <span className="text-lg hidden sm:inline-block link-underline">Github</span>
            <IconBrandGithub className="sm:hidden" size="28"/>
          </a>
          <a
            href="/resume"
            className="text-gray-700 hover:text-black transition-all sm:transition-none active:translate-y-0.5">
            <span className="text-lg hidden sm:inline-block link-underline">Resume</span>
            <IconNotes className="sm:hidden" size="28" />
          </a>
        </div>
      </div>
    </nav>
  );
}
