"use client";
import { useImageContext } from "@/components/contextApi/imageContext";
import SignIn from "./signIn";
import SignUp from "./signUp";

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
            <div>{switChModal == "signin" ? <SignIn /> : <SignUp />}</div>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
