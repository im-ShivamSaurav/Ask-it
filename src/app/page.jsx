import Navbar from "@/components/Navbar/Navbar.jsx";
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
              Enhance your&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700 select-none">
                Creativity
              </span>
              &nbsp;to another&nbsp;
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-blue-700 select-none">
                level
              </span>
              &nbsp;effortlessly.
            </p>
          </div>
        </div>
        <div className="flex gap-2 md:gap-6 mt-0">
          <Link href="./login">
            <button className="w-44 h-12 p-6 text-lg text-white font-bold bg-gradient-to-br gradient-radial from-blue-500 to-blue-900 rounded-lg flex items-center justify-center gap-2 ">
              <TbLogin2 className="bold font-extrabold text-xl" />
              Log In
            </button>
          </Link>
          <Link href="./signup">
            <button className="w-44 h-12 p-6 text-lg text-white font-bold bg-gradient-to-br gradient-radial from-[#09C090] to-[#09C09099] rounded-lg flex items-center justify-center gap-2 ">
              <TbLogin2 className="bold font-extrabold text-xl" />
              Sign Up
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
