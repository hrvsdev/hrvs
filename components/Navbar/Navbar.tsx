import { TbBrandGithub, TbFileDownload } from "react-icons/tb";

export default function Navbar() {
  return (
    <nav className="fixed flex justify-center items-center h-24 px-6 border-b border-gray-100 w-full">
      <div className="flex justify-between items-center pl-1 max-w-5xl w-full">
        <div className="text-xl font-bold p-2 border-2 border-black rounded-full">HV</div>
        <div className="flex gap-12">
          <TbBrandGithub size="32" title="Github"/>
        </div>
      </div>
    </nav>
  );
}
