"use client";
import {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface ImageContextProps {
  image: string; // Assuming image is a string, you can adjust the type accordingly
  prevImage: string; // Assuming image is a string, you can adjust the type accordingly
  imageType: string; // Assuming image is a string, you can adjust the type accordingly
  promptCreater: string; // Assuming image is a string, you can adjust the type accordingly
  defaultLoader: Boolean;
  authModal: any;
  loggedIn: any;
  switChModal: any;
  promptImageHandler: Dispatch<SetStateAction<string>>;
  prevImageHandler: Dispatch<SetStateAction<string>>;
  imageTypeHandler: Dispatch<SetStateAction<string>>;
  promptCreaterHandler: Dispatch<SetStateAction<string>>;
  LoggedInHandler: Dispatch<SetStateAction<string>>;
  setDefaultLoader: Dispatch<boolean>;
  authModalHandler: Dispatch<any>;
  switchModalHandler: Dispatch<any>;
}

export const ImageContext = createContext<ImageContextProps | undefined>(
  undefined
);

export const useImageContext = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error(
      "useImageContext must be used within an ImageContext.Provider"
    );
  }
  return context;
};
