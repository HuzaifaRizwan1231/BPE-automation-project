import React from "react";

export default function Login() {
  return (
    <>
      <div className="main">
        <div className="main-wrapper">
          <div className="page-content">
            <div className="login-form-wrapper">
              <div className="mb-6">
                <h1 className="title font-bold">Welcome to Stackstream!</h1>
                <h4 className="tagline">
                  Please Log-in to your account and start the adventure
                </h4>
              </div>

              <form class="login-form space-y-3" action="#" method="POST">
                <div>
             
                  <div class="mt-2">
                    <input
                    placeholder="   Email"
                      id="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  
                  <div class="mt-2">
                    <input
                    placeholder="   Password"
                      id="password"
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div class="flex mt-2 items-center justify-between">
                
                    <div class="text-sm">
                      <a
                        href="#"
                        class="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    class="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
