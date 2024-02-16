"use client";
import AuthForm from "../authForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";
import { useRouter } from "next/router";
import { useImageContext } from "../contextApi/imageContext";

export default function SignIn() {
  const fetchModal = useImageContext();
  const fetcUser = useImageContext();
  const setUserImage = fetcUser.userImageHandler;
  const userImage = fetcUser.userImage;
  const setAuthModal = fetchModal.authModalHandler;

  // const router = useRouter();
  const signInHandler = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          setAuthModal(false);
          if (user.photoURL) {
            setUserImage(user?.photoURL);
          } else {
            setUserImage(user.email?.slice(0,1) ?? "");
          }
        } else {
          setAuthModal(true);
        }
        console.log("user--->", user);
        console.log("userImage---->", userImage);
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
