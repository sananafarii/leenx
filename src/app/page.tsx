import Image from "next/image";
import NavBar from "./NavBar";
import cx from "classnames";
import { exo } from "./fonts";
import astro from "./images/astro.png";
export default function Home() {
  return (
    <div>
      <div className="text-white pt-1 md:pt-10 main-page px-2 md:px-56 min-h-screen">
        {/* <Image
          src="/images/bg-main.jpg"
          alt="background"
          fill
          className="object-cover z-[-99]"
        /> */}
        {/* Navigation */}
        <NavBar />

        {/* Main Content */}
        <main className="flex flex-wrap">
          <div className="z-10 flex justify-center max-md:w-full">
            <Image
              src={astro}
              alt="Astronaut floating in space"
              width={360}
              height={535}
              className="max-md:w-auto max-md:h-[150px] animate-float md:mt-20 md:ml-20 md:mr-[-80px]"
            />
          </div>
          <div className="hidden md:block z-0 border-[10px] w-[145px] h-[455px] mt-14 box-gradient"></div>
          <div className="ml-10 basis-[422px] flex flex-col items-start">
            <h1
              className={cx(
                "flex text-4xl md:text-6xl font-semibold mb-6  mt-4 md:mt-28",
                exo.className
              )}
            >
              <div>
                <div className="flex items-center gap-1">
                  <div className="bg-white w-[40px] h-[6px]"></div>
                  <div>LEENX</div>
                </div>
                <div>AGENCY</div>
              </div>
            </h1>

            <p className="text-[24px] text-gray-300 mb-8">
              Our expertise, as well as our passion for web design, sets us
              apart from other agencies.
            </p>

            <button className="self-center md:self-end w-[180px] h-10 flex items-center justify-center border border-[#5CA8FF] rounded-full hover:bg-blue-600 transition-colors">
              Call Us
            </button>
          </div>
          <div className="mt-5 md:mt-[-60px]">
            <h3 className="font-semibold">Get in touch</h3>
            <p className="flex items-center gap-2">E: linksteam@gmail.com</p>
            <p className="flex items-center gap-2">T: +7 55667788</p>
          </div>
          {/* Astronaut Image */}
        </main>
      </div>
      <div className="flex bg-gradient-to-r from-black to-[#415588] items-center text-white h-[102px] bg-blue-400 text-[45px] overflow-hidden text-nowrap">
        <div className="">
        . APP DESIGN . CREATIVE CONTE . UI.UX DESIGN . WEBSITE DESIGN SEO . APP
        DESIGN . CREATIVE CONTE
        </div>
      </div>
      <div className="h-[400px]">
        <h2>Our Services</h2>
      </div>
    </div>
  );
}
