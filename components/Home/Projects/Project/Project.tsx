/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

export default function Project() {
  return (
    <div className="flex flex-col md:flex-row border shadow-xl rounded-md bg-white/90 backdrop-blur">
      <div className="md:w-1/2 aspect-video border-b md:border-b-0 md:border-r">
        <img
          alt="secured-text"
          src="/images/projects/securedtext.png"
          className="rounded-md"
        />
      </div>
      <div className="md:w-1/2">
    <h1 className="text-3xl font-semibold">Secured Text</h1>
    <h1 className="text-3xl font-semibold">Secured Text</h1>
    <h1 className="text-3xl font-semibold">Secured Text</h1>
    <h1 className="text-3xl font-semibold">Secured Text</h1>
      </div>
    </div>
  );
}
