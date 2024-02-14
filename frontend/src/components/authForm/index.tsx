"use client";
import React, { Fragment, useRef, useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/app/firebase";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useImageContext } from "../contextApi/imageContext";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
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
}
const AuthForm: React.FC<AuthFormProps> = ({
  signUp,
  signIn,
  signUpHandler,
  signInHandler,
}) => {
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);
  const emailRef = useRef<any>();
  const passwordRef = useRef<any>();
  const conformPasswordRef = useRef<any>();
  const modalCheck = useImageContext();
  const setModalCheck = modalCheck.authModalHandler;
  const setSwitchModal = modalCheck.switchModalHandler;
  const modal = modalCheck.authModal;

  const submitHandler = (e: any) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (signUp && signUpHandler !== undefined) {
      const conformPassword = conformPasswordRef.current.value;
      signUpHandler(email, password, conformPassword);
    }

    if (signIn && signInHandler !== undefined) {
      signInHandler(email, password);
    }
  };
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };
  return (
    <Transition.Root show={modal} as={Fragment}>
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
          <div className="flex min-h-full  items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0  sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative md:w-[400px] transform rounded-lg bg-lightGreen text-left shadow-xl transition-all sm:my-8 p-3">
                <div className="flex w-full h-full flex-col justify-center bg-lightGreen text-black">
                  <div className="sm:mx-auto sm:w-full sm:max-w-md border p-5 border-green rounded-xl bg-black">
                    <form onSubmit={submitHandler} className="space-y-6 ">
                      <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-white ">
                        {signUp
                          ? "Sign Up Your Account!"
                          : "Sign in to Your Account!"}
                      </h2>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        ref={emailRef}
                        autoComplete="email"
                        placeholder="email..."
                        required
                        className="block w-full rounded-md border border-green py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-text-green sm:text-sm sm:leading-6"
                      />

                      <input
                        id="Password"
                        name="Password"
                        type="Password"
                        ref={passwordRef}
                        autoComplete="Password"
                        placeholder="password"
                        required
                        className="block w-full rounded-md border border-green py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-text-green sm:text-sm sm:leading-6"
                      />

                      {signUp && (
                        <input
                          id="conformPassword"
                          name="conformPassword"
                          type="password"
                          ref={conformPasswordRef}
                          autoComplete="conformPassword"
                          placeholder="Conform Password"
                          required
                          className="block w-full rounded-md border border-green py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-text-green sm:text-sm sm:leading-6"
                        />
                      )}

                      <button
                        type="submit"
                        className="flex w-full mx-auto justify-center rounded-3xl  bg-lightGreen px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-green"
                      >
                        {signUp ? " Sign up" : "Sing in"}
                      </button>
                      <button
                        onClick={signInWithGoogle}
                        type="submit"
                        className="flex gap-1  md:gap-2 w-full justify-center items-center rounded-md md:px-3 border bg-lightGreen  py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-green"
                      >
                        <FcGoogle className="w-5 h-5 md:w-6 md:h-6" />{" "}
                        <span className="">CONTINUE WITH GOOGLE</span>
                      </button>

                      <button
                        type="submit"
                        className="flex gap-1  md:gap-2 items-center w-full justify-center uppercase rounded-md border bg-lightGreen  md:px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-green"
                      >
                        <FaApple className="-ml-2 w-5 h-5 md:w-6 md:h-6 text-gray-700" />{" "}
                        <span className="">CONTINUE WITH APPLE</span>
                      </button>
                    </form>
                    {!signUp ? (
                      <p className="mt-10 text-center text-sm text-white">
                        Don&#39;t have an Account?
                        <Link
                          onClick={() => setSwitchModal("signup")}
                          href="#"
                          className="uppercase font-semibold leading-6  hover:text-lightGreen underline"
                        >
                          Signup
                        </Link>
                      </p>
                    ) : (
                      <p className="mt-10 text-center text-sm text-white">
                        Already have an Account?
                        <Link
                          onClick={() => setSwitchModal("signin")}
                          href="#"
                          className="font-semibold leading-6  hover:text-lightGreen underline"
                        >
                          LOGIN
                        </Link>
                      </p>
                    )}
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

export default AuthForm;

{
  /* <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-lightGreen text-black">
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border p-5 border-green rounded-xl bg-black">
    <form className="space-y-6 ">
      <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-white ">
        {signUp ? "Sign Up Your Account!" : "Sign in to Your Account!"}
      </h2>

      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="email..."
        required
        className="block w-full rounded-md border border-green py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-text-green sm:text-sm sm:leading-6"
      />

      <input
        id="Password"
        name="Password"
        type="Password"
        autoComplete="Password"
        placeholder="password"
        required
        className="block w-full rounded-md border border-green py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-text-green sm:text-sm sm:leading-6"
      />

      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        placeholder="confirm password"
        required
        className="block w-full rounded-md border border-green py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-text-green sm:text-sm sm:leading-6"
      />

      <button
        type="submit"
        className="flex w-full mx-auto justify-center rounded-3xl  bg-lightGreen px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-green"
      >
        Sign in
      </button>
      <button
        type="submit"
        className="flex w-full justify-center  rounded-md px-3 border bg-lightGreen  py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-green"
      >
        CONTINUE WITH GOOGLE
      </button>

      <button
        type="submit"
        className="flex w-full justify-center rounded-md border bg-lightGreen  px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-green"
      >
        CONTINUE WITH FACEBOOK
      </button>
    </form>

    <p className="mt-10 text-center text-sm text-white">
      Already a Wooponder?
      <a
        href="#"
        className="font-semibold leading-6  hover:text-indigo-500 underline"
      >
        LOGIN
      </a>
    </p>
  </div>
</div> */
}
