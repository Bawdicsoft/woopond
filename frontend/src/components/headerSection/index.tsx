import Image from "next/image";
import NavBar from "../navbar";
import PromptCreater from "../promptCreater";
import HeroImagesSlider from "../heroImagesSlider";

export default function HeaderSection() {
  return (
    <div className="bg-black">
      <section className="relative px-4 md:px-0 lg:px-10 xl:px-14  h-[800px] md:h-[600px] lg:h-[700px] max-w-screen-xl mx-auto">
        <NavBar />
        {/* <PromptCreater /> */}
        <div className="relative z-30 pt-6 gap-8 md:gap-0 md:pt-20 md:px-6 grid grid-cols-1 md:grid-cols-3 h-[580px]">
          <div className="md:col-span-2 md:pr-12">
            <h2 className="mx-auto font-inika text-xl md:text-3xl lg:text-[38px] xl:text-[42px] py-1 lg:py-2 lg:pb-2 font-bold text-primary">
              Hello da Vinci,
            </h2>
            <h2 className="mx-auto font-inika text-xl md:text-3xl lg:text-[38px] xl:text-[42px] py-1 lg:py-2 lg:pb-2 font-bold text-primary">
              Start Creating Now!
            </h2>
            <div className="max-w-2xl pt-4 md:pt-5  lg:pt-8 flex flex-col gap-4 md:gap-8">
              <p className="text-white lg:text-xl  xl:text-2xl md:text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                corrupti modi quidem provident ut quam eaque non veniam
                reprehenderit cupiditate repudiandae autem omnis possimus
                reiciendis amet,s eum?
              </p>
              <div className="">
                <button className="bg-lightGreen text-black font-semibold rounded-xl text-lg font-inter p-2  md:p-4">
                  Generate Now
                </button>
              </div>
            </div>
          </div>
          <div className="h-full md:-mt-8 md:-ml-4 lg:ml-0">
            <HeroImagesSlider />
          </div>
        </div>
        <div className="absolute z-10 md:left-8 lg:left-14 xl:left-20 top-[90px] w-10 h-10  md:w-20 md:h-20 opacity-60">
          <Image
            src={"/Assests/homeAssests/bgHeader.png"}
            alt="bgimage"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div className="absolute z-10 left-16 md:left-32 lg:left-48 xl:left-60 top-[90px] w-16 h-16 md:w-28 md:h-28 opacity-60">
          <Image
            src={"/Assests/homeAssests/bgHeader.png"}
            alt="bgimage"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div className="absolute z-10 left-36 top-20 md:left-60 lg:left-[350px]  xl:left-[430px] lg:top-[95px] w-24 h-24 md:w-52 md:h-52 opacity-60">
          <Image
            src={"/Assests/homeAssests/bgHeader.png"}
            alt="bgimage"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div className="absolute z-10 right-0 xl:right-32 top-[150px] md:top-[90px] md:w-[400px] w-[150px] h-[150px] md:h-[400px] opacity-60">
          <Image
            src={"/Assests/homeAssests/bgHeader.png"}
            alt="bgimage"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
      </section>
    </div>
  );
}
