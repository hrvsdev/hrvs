import Link from "next/link";

export default function Left(): JSX.Element {
  return (
    <Link href="/">
      <a className="text-xl font-bold w-12 h-12 flex items-center justify-center border-2 border-black rounded-full">
        HV
      </a>
    </Link>
  );
}
