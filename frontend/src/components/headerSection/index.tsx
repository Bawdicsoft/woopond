"use client";
import Image from "next/image";
import NavBar from "../navbar";
import PromptCreater from "../promptCreater";
import HeroImagesSlider from "../heroImagesSlider";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import TypedText from "./animationText";

export default function HeaderSection() {
  ("");
  const animatedText =
    "I am WoPond, your creative companion in crafting digital masterpieces. Together, we shall embark on a journey to bring your imaginative visions to life, weaving artistry into the fabric of the digital landscape. As your AI ally, I stand ready to assist you in unleashing the full spectrum of your creativity, transforming ordinary ideas into extraordinary works of art. Let the collaboration commence and let the digital canvas become the playground where innovation and ingenuity dance hand in hand!";
  return (
    <div className="bg-black text-start">
      <section className="relative  h-[800px] md:h-[600px] lg:h-[700px]  max-w-6xl mx-auto px-5 xl:px-0 ">
        {/* <NavBar /> */}
        {/* <PromptCreater /> */}
        <div className="relative z-20 gap-8 md:pt-20  grid grid-cols-1 md:grid-cols-3 h-[580px] ">
          <div className="md:col-span-2 ">
            <div className="max-w-2xl pt-4 md:pt-5  lg:pt-4 flex flex-col gap-4 md:gap-4 ">
              <span id="typed-output"></span>
              <div className="">
                <TypedText text={animatedText} />
              </div>
              <h2 className=" font-inika text-xl md:text-3xl lg:text-[38px] xl:text-[42px] pt-2 xl:pt-5 font-bold text-primary">
                Hello da Vinci,
              </h2>
              <h2 className=" font-inika text-xl md:text-3xl lg:text-[38px] xl:text-[42px] pb-2  font-bold text-primary">
                Start Creating Now!
              </h2>
              <div className="xl:mt-12 lg:mt-10">
                {/* <button className="bg-lightGreen text-black font-semibold rounded-xl text-lg font-inter p-2  md:p-4">
                  Generate Now
                </button> */}

                <DrawOutlineButton>
                  <ScrollLink
                    to="generateNow" // This should match the ID of the element you want to scroll to
                    smooth={true}
                    duration={600}
                    offset={-20} // Adjust this offset based on your layout
                    className="bg-lightGreen hover:bg-black hover:text-lightGreen rounded-xl text-black font-semibold text-lg font-inter p-2 cursor-pointer  md:p-4"
                  >
                    Generate Now
                  </ScrollLink>
                </DrawOutlineButton>
              </div>
            </div>
          </div>
          <div className="h-full md:-mt-4  xl:-mt-8">
            <HeroImagesSlider />
          </div>
        </div>

        {/* bg images start */}
        <div className="absolute z-10 md:left-8 lg:left-14 xl:left-20 top-[30px] w-10 h-10  md:w-14 md:h-14 opacity-60">
          <Image
            src={"/Assests/homeAssests/bgHeader.png"}
            alt="bgimage"
            width={500}
            height={500}
            className="w-full h-full animate-pulse"
          />
        </div>
        <div className="absolute z-10 left-16 md:left-32 lg:left-48 xl:left-60 top-[40px] w-16 h-16 md:w-24 md:h-24 opacity-60">
          <Image
            src={"/Assests/homeAssests/bgHeader.png"}
            alt="bgimage"
            width={500}
            height={500}
            className="w-full h-full animate-pulse"
          />
        </div>
        <div className="absolute z-10 left-36 top-20 md:left-60 lg:left-[350px]  xl:left-[430px] lg:top-[65px] w-24 h-24 md:w-40 md:h-40 opacity-60">
          <Image
            src={"/Assests/homeAssests/bgHeader.png"}
            alt="bgimage"
            width={500}
            height={500}
            className="w-full h-full animate-pulse"
          />
        </div>
        <div className="absolute z-10 right-0 xl:right-56 top-[150px] md:top-[70px] md:w-[300px] w-[150px] h-[150px] md:h-[300px] opacity-60">
          <Image
            src={"/Assests/homeAssests/bgHeader.png"}
            alt="bgimage"
            width={500}
            height={500}
            className="w-full h-full animate-pulse"
          />
        </div>
      </section>
    </div>
  );
}
const DrawOutlineButton = ({ children, ...rest }: { children: any }) => {
  return (
    <button
      {...rest}
      className="group rounded-xl relative py-4 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute group-hover:rounded-xl left-0 top-0 h-[2px] w-0 bg-lightGreen transition-all duration-300 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute group-hover:rounded-xl right-0 top-0 h-0 w-[2px] bg-lightGreen transition-all delay-100 duration-300 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute group-hover:rounded-xl bottom-0 right-0 h-[2px] w-0 bg-white transition-all delay-200 duration-300 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute group-hover:rounded-xl bottom-0 left-0 h-0 w-[2px] bg-lightGray transition-all delay-300 duration-300 group-hover:h-full" />
    </button>
  );
};
