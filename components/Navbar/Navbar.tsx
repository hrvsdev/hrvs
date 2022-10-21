import Link from "next/link";

import Left from "./Left";
import Right from "./Right";

export default function Navbar() {
  return (
    <nav className="fixed flex justify-center items-center h-20 sm:h-24 px-6 border-b border-gray-100 w-full">
      <div className="flex justify-between items-center pl-1 max-w-5xl w-full">
        <Left/>
        <Right/>
      </div>
    </nav>
  );
}
