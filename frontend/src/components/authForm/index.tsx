export default function AuthForm({ signUp }: { signUp: any }) {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-lightGreen text-black">
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
      </div>
    </>
  );
}
