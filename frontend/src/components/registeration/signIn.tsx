"use client";
import AuthForm from "../authForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";
import { useRouter } from "next/router";
import { useImageContext } from "../contextApi/imageContext";

export default function SignIn() {
  const fetchModal = useImageContext();
  const setAuthModal = fetchModal.authModalHandler;
  const setLoggedIn = fetchModal.LoggedInHandler;
  const loggedIn = fetchModal.loggedIn;
  // const router = useRouter();
  const signInHandler = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          setAuthModal(false);
        } else {
          setAuthModal(true);
        }
        console.log("user--->", user);
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage--->", errorMessage);
        console.log("errorCode--->", errorCode);
      });
  };

  return (
    <div>
      <AuthForm signUp={false} signIn={true} signInHandler={signInHandler} />
    </div>
  );
}
