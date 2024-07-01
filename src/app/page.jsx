import Navbar from "@/components/Navbar/Navbar.jsx";
import MainPageSignButton from "@/components/auth/MainPageSignButton";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Link from "next/link";
import { TbLogin2 } from "react-icons/tb";

export default function Home() {
  return (
    <div>
      <Navbar/>
      
      <main className="flex flex-col my-[8%] items-center justify-center p-4 lg:px-24">
        <div className="relative mb-11 h-full flex flex-col max-w-4xl gap-8 place-items-center">
          <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 pointer-events-none">
            <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-4 z-10 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black">
              <span className="text-transparent bg-clip-text bg-gradient-to-br gradient-radial from-blue-400 to-blue-900 select-none">
                Ask-it
              </span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-4xl font-semibold select-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700 select-none">
                Personalised AI&nbsp;
              </span>
              suggestions for your every&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700 select-none">
                Mood.<br/>
              </span>
              &nbsp;Your&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700 select-none">
                Mood,
              </span>
              
              &nbsp;Your&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700 select-none">
                Movie.
              </span>
            </p>
          </div>
        </div>
        <MainPageSignButton/>
      </main>
    </div>
  );
}
