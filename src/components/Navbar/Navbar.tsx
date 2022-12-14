import Left from "./Left";
import Right from "./Right";

export default function Navbar() {
  return (
    <nav class="absolute flex justify-center items-center h-20 sm:h-24 px-6 bg-white border-b border-slate-100 w-full">
      <div class="flex justify-between items-center pl-1 max-w-5xl w-full">
        <Left/>
        <Right/>
      </div>
    </nav>
  );
}
