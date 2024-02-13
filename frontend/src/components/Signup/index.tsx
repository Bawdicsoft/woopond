import AuthForm from "../authForm";

export default function SignUp() {
  return (
    <div>
      <AuthForm signUp={true} signIn={false} />
    </div>
  );
}
