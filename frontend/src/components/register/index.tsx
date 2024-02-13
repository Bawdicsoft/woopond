"use client";
import { useImageContext } from "@/components/contextApi/imageContext";

import SignIn from "@/components/signIn";
import SignUp from "../signUp";

export default function Register() {
  const authModal = useImageContext();
  const modal = authModal.authModal;
  const user = authModal.loggedIn;
  const switChModal = authModal.switChModal;
  return (
    <>
      {!user ? (
        <div className="">
          {modal ? (
            <div>{switChModal == "signin" ? <SignIn /> : null}</div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
