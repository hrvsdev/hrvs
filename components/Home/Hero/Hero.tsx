export default function HeroComp(): JSX.Element {
  return (
    <section id="main" className="flex justify-center items-center min-h-screen py-24 px-6 sm:py-32">
      <div className="max-w-5xl w-full">
        <p className="text-slate-600 text-lg sm:text-xl pl-1 mb-2">
          Hi there, I&apos;m
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 md:mb-8">
          Harsh Vyas
        </h1>
        <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-snug mb-6">
          Web and Mobile Developer
        </p>
        <p className="text-slate-600 text-base md:text-lg mb-12 leading-8 max-w-xl pl-1">
          I&apos;m a passionate software developer from India, mainly focusing on&nbsp;
          <b>front-end</b> to build <b>creative</b>, <b>attractive</b> and <b>better</b>
          &nbsp; apps for web and mobile.
        </p>
        <div className="flex gap-x-5">
          <button className="w-fit font-medium text-white hover:text-black border-2 border-slate-800 bg-slate-800 hover:bg-transparent cursor-pointer rounded-full transition-transform active:translate-y-0.5">
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
    </section>
  );
}
