"use client";
import { useState } from "react";
import { ImageContext } from "./imageContext";

export default function ImageProvider({ children }: { children: any }) {
  const [promptImage, setPromptImage] = useState("");
  const [prevImage, setPrevImage] = useState(
    "/Assests/homeAssests/firstImage.jpg"
  );
  const [defaultLoader, setDefaultLoader] = useState<any>(false);
  const promptImageHandler = (img: any) => {
    setPromptImage(img);
  };
  const prevImageHandler = (img: any) => {
    setPrevImage(img);
  };
  return (
    <ImageContext.Provider
      value={{
        image: promptImage,
        prevImage: prevImage,
        promptImageHandler,
        defaultLoader,
        setDefaultLoader,
        prevImageHandler,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}
