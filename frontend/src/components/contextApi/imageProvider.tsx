"use client";
import { useEffect, useState } from "react";
import { ImageContext } from "./imageContext";

export default function ImageProvider({ children }: { children: any }) {
  const [promptImage, setPromptImage] = useState("");
  const [imageType, setIamgeType] = useState("Realistic");
  const [promptCreater, setPromptCreater] = useState("testImage");
  const [prevImage, setPrevImage] = useState(
    "/Assests/homeAssests/firstImage.jpg"
  );
  let user =
    typeof window !== "undefined" ? localStorage.getItem("user") : null;
  const [defaultLoader, setDefaultLoader] = useState<any>(false);
  const [authModal, setAuthModal] = useState<any>(true);
  const [switChModal, setSwitChModal] = useState<any>("signin");
  const [loggedIn, setLoggedIn] = useState<any>(user);
  const promptImageHandler = (img: any) => {
    setPromptImage(img);
  };
  const switchModalHandler = (text: any) => {
    setSwitChModal(text);
  };
  const prevImageHandler = (img: any) => {
    setPrevImage(img);
  };
  const imageTypeHandler = (title: any) => {
    setIamgeType(title);
  };
  const promptCreaterHandler = (title: any) => {
    setPromptCreater(title);
  };
  const authModalHandler = (bol: any) => {
    setAuthModal(bol);
  };
  const LoggedInHandler = (bol: any) => {
    setLoggedIn(bol);
  };
  return (
    <ImageContext.Provider
      value={{
        image: promptImage,
        prevImage: prevImage,
        authModal: authModal,
        imageType: imageType,
        promptCreater: promptCreater,
        defaultLoader,
        loggedIn,
        switChModal,
        promptImageHandler,
        setDefaultLoader,
        prevImageHandler,
        imageTypeHandler,
        promptCreaterHandler,
        authModalHandler,
        LoggedInHandler,
        switchModalHandler,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}
