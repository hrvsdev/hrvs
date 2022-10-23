import { IconDeviceDesktopAnalytics } from "@tabler/icons";

export default function FrontEnd() {
  return (
    <div className="flex flex-col items-center grow py-8 px-8 sm:px-6 md:px-8 lg:px-12 shadow-xl rounded-xl bg-white/90 backdrop-blur">
      <div className="text-blue-900 bg-blue-100 w-fit rounded-full p-4 mb-6">
        <IconDeviceDesktopAnalytics stroke="1.5" size="45" />
      </div>
      <h2 className="text-blue-700 text-xl sm:text-2xl font-semibold mb-3">
        Front End & UI
      </h2>
      <p className="text-center tracking-wide mb-6">I am a front end expert</p>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg text-blue-600 font-medium">Languages</h3>
        <ul className="text-center mb-8 leading-relaxed">
          <li>Fixed match</li>
        </ul>
      </div>
    </div>
  );
}
