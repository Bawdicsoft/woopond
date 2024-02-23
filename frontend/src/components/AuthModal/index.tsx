"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  getRedirectResult,
  TwitterAuthProvider,
} from "firebase/auth";
import { auth } from "@/app/firebase";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useImageContext } from "../contextApi/imageContext";
import Link from "next/link";
interface AuthFormProps {
  signUpHandler?: (
    email: string,
    password: string,

    conformPassword: string
  ) => void;
  signInHandler?: (email: string, password: string) => void;
  signUp?: boolean;
  signIn?: boolean;
  open: boolean;
  setOpen: (d: boolean) => void;
}
const AuthModal: React.FC<AuthFormProps> = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);
  const modalCheck = useImageContext();
  const FethUserImage = useImageContext();
  const setUserImage = FethUserImage.userImageHandler;
  const setModalCheck = modalCheck.authModalHandler;
  const setSwitchModal = modalCheck.switchModalHandler;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const modal = modalCheck.authModal;
  const handleCloseModal = () => {
    setOpen(false);
    setError(null); // Reset error when closing modal
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={setModalCheck}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-green backdrop-blur-lg bg-opacity-30 bg-blend-multiply  transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full  items-center justify-center p-4 sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0  sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform   transition-all ">
                <div className="flex w-full h-full flex-col justify-center  text-black">
                  <div className="sm:mx-auto sm:w-full   ">
                    <div>
                      {open ? (
                        <div className="font-semibold ">
                          <div className="border rounded-3xl bg-[#0B1618] md:w-[600px] mx-auto p-5 text-center flex flex-col gap-5">
                            <h3 className="text-lg text-[#FFFFFF]">
                              Anonymous tries exceeded....
                            </h3>
                            <h1 className="text-3xl text-[#B8EEEB]">
                              Create Unlimited Free Design Now!
                            </h1>
                            <div className="flex gap-5 justify-center">
                              <button
                                className="py-3 px-5 bg-[#514A4A]  rounded-3xl text-2xl text-white "
                                onClick={() => {
                                  setOpen(!open);
                                  setModalCheck(true);
                                  setSwitchModal("signin");
                                }}
                              >
                                Login
                              </button>
                              <button
                                className="py-3 px-5 bg-[#B8EEEB] rounded-3xl text-2xl "
                                onClick={() => {
                                  setOpen(!open);
                                  setModalCheck(true);
                                  setSwitchModal("signup");
                                }}
                              >
                                Signup
                              </button>
                            </div>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AuthModal;
