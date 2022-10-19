export default function HeroComp(): JSX.Element {
  return (
    <div className="flex justify-center p-5 sm:py-16 md:py-24 md:px-5">
      <div className="flex flex-col max-w-screen-lg w-full">
        <p className="text-lg sm:text-xl text-gray-500 pl-1 mb-1">Hi there, I&apos;m</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2 sm:mb-4">
          Harsh Vyas.
        </h1>
        <p className="text-3xl sm:text-4xl md:text-6xl mb-5">
          I code for the Web & Mobile.
        </p>
        <p className="text-base md:text-lg mb-12 leading-8 text-gray-600 max-w-xl">
          I am a software developer mainly focused on the <b>front-end</b> to create&nbsp;
          <b>attractive and better apps</b> for both web and mobile. Apart from coding, I
          like to play chess.
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
