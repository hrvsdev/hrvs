export default function HeroComp(): JSX.Element {
  return (
    <div className="flex justify-center sm:items-center h-screen pt-40 sm:py-14">
      <div className="flex flex-col max-w-5xl w-full">
        <p className="text-lg sm:text-xl text-gray-600 pl-1 mb-2">Hi there, I&apos;m</p>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 md:mb-8">
          Harsh Vyas
        </h1>
        <p className="text-4xl sm:text-5xl md:text-7xl leading-snug mb-6">
          Web and Mobile Developer
        </p>
        <p className="text-base md:text-lg mb-12 leading-8 text-gray-600 max-w-xl">
          I&apos;m a passionate software developer from India, mainly focusing on&nbsp;
          <b>front-end</b> to build <b>creative</b>, <b>attractive</b> and <b>better</b>
          &nbsp; apps for web and mobile.
        </p>
        <div className="flex gap-x-5">
          <button className="w-fit font-medium text-white border-2 border-black bg-black cursor-pointer rounded-full transition-transform hover:text-black hover:bg-white active:translate-y-0.5">
            <a
              className="inline-block py-2.5 px-7"
              href="https://github.com/hrvsdev"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
