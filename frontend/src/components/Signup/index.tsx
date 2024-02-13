"use client";
import AuthForm from "../authForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase";

export default function SignUp() {
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
