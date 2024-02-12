export default function Login() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-lightGreen">
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm border p-5 rounded-lg bg-black text-white">
          <form className="space-y-6">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login to Your Account
            </h2>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="email..."
                  required
                  className="block w-full rounded-md border border-green py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-text-green sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-lightGreen hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="Password"
                  name="Password"
                  type="Password"
                  autoComplete="Password"
                  placeholder="password"
                  required
                  className="block w-full rounded-md border border-green py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full mx-auto justify-center rounded-3xl text-black  bg-lightGreen px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-green"
            >
              Sign in
            </button>
            <button
              type="submit"
              className="flex w-full justify-center text-black rounded-md px-3 border bg-lightGreen  py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-green"
            >
              CONTINUE WITH GOOGLE
            </button>

            <button
              type="submit"
              className="flex w-full justify-center text-black rounded-md border bg-lightGreen  px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-text-green"
            >
              CONTINUE WITH FACEBOOK
            </button>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a Wooponder Member??
            <a
              href="#"
              className="font-semibold leading-6 text-lightGreen hover:text-indigo-500 "
            >
              SIGNUP
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
