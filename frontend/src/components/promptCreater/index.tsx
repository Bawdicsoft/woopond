"use client";
import { useContext, useRef, useState } from "react";
import { useImageContext } from "../contextApi/imageContext";
import Image from "next/image";

export default function PromptCreater() {
  const generatedImage = useImageContext();
  // const setImageFetch = generatedImage.promptImageHandler;
  const setLoader = generatedImage.setDefaultLoader;
  const [imgData, setImgData] = useState("");
  const promptRef = useRef<any>();
  const [imageFetch, setImageFetch] = useState<any>();

  const imageHandler = async (e: any) => {
    setLoader(true);
    setImageFetch("");
    e.preventDefault();
    const prompt = promptRef.current.value;
    const randomString = Math.random().toFixed(7);
    const augmentedInputValue = `${prompt} ${randomString}`;
    const modelUrl =
      "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5";
    // "https://api-inference.huggingface.co/models/kuldeepsingh-in/kd-project-google-03";

    try {
      const response: any = await Promise.race([
        fetch("/api/prompt-to-img", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            input: augmentedInputValue,
            modelUrl,
          }),
        }),
        new Promise(
          (_, reject) =>
            setTimeout(() => reject(new Error("Request timeout")), 30000) // Set a timeout of 10 seconds
        ),
      ]);

      if (!response.ok) {
        throw new Error("Failed to fetch image");
      }

      const data = await response.arrayBuffer();
      const blob = new Blob([data], { type: "image/png" });

      const imgUrl = URL.createObjectURL(blob);

      setImageFetch(imgUrl);
    } catch (err) {
      console.log("Error:", err);
      console.error("Error:", err);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="max-w-xl md:max-w-md lg:max-w-lg xl:max-w-xl md:pl-5 z-30 relative flex flex-col gap-3">
      {/* <h2 className="mx-auto font-inika text-xl md:text-2xl lg:text-[28px] xl:text-[32px] py-1 md:py-2 lg:pb-2 font-bold text-primary">
        Hello da Vinci,Start Creating Now!
      </h2> */}
      <form
        onSubmit={imageHandler}
        className="focus:ring-4 border-4  border-white rounded-full p-1"
      >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only "
        >
          Create
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
          <input
            type="search"
            ref={promptRef}
            id="default-search"
            className="block outline-none w-full focus:ring-4 focus:ring-lightGreen rounded-full p-4 md:p-5 lg:p-5 ps-5 text-sm lg:text-xl text-gray-900 bg-white"
            placeholder="Create An Image..."
            required
          />
          <button
            type="submit"
            className="text-gray-800 font-inika rounded-full absolute end-2.5 bottom-1.5 md:bottom-1 lg:bottom-1.5 bg-lightGreen hover:bg-teal-300 focus:ring-2 focus:outline-none focus:ring-blue-300 md:text-lg lg:text-2xl font-semibold px-4 py-2 md:px-5 lg:px-8 md:py-3 lg:py-3"
          >
            Create
          </button>
        </div>
      </form>
      {imageFetch && (
        <Image
          src={imageFetch}
          alt="Generating image..."
          width={1000}
          height={1200}
          className="w-full h-full rounded-3xl"
        />
      )}
    </div>
  );
}
