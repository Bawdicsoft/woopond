"use client";
import AuthForm from "../authForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";
import { useImageContext } from "../contextApi/imageContext";

export default function SignUp() {
  const modalCheck = useImageContext();
  const setModalCheck = modalCheck.authModalHandler;
  const fetcUser = useImageContext();
  const setUserImage = fetcUser.userImageHandler;

  const signUpHandler = (
    email: string,
    password: string,
    conformPassword: string
  ) => {
    if (password === conformPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user ---->", user);
          if (user) {
            setModalCheck(false);
            setUserImage(
              user?.photoURL ?? user?.displayName?.slice(0, 1) ?? ""
            );
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("errorMessage ---->", errorMessage);
          console.log("errorCode ---->", errorCode);
        });
    }
  };

  return (
    <div>
      <AuthForm signUp={true} signIn={false} signUpHandler={signUpHandler} />
    </div>
  );
}
