"use client";
import { useState } from "react";
import { ImageContext } from "./imageContext";

export default function ImageProvider({ children }: { children: any }) {
  const [promptImage, setPromptImage] = useState("");
  const [imageType, setIamgeType] = useState("Realistic");
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
  const imageTypeHandler = (title: any) => {
    setIamgeType(title);
  };
  return (
    <ImageContext.Provider
      value={{
        image: promptImage,
        prevImage: prevImage,
        imageType: imageType,
        promptImageHandler,
        defaultLoader,
        setDefaultLoader,
        prevImageHandler,
        imageTypeHandler,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}
