import axios from "axios";
import React, { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {

  const navigate = useNavigate();

  const {ip, setUserId, userId, setIsAdminLogin, setIsLogin, setUserName, setUserEmail, setPassword, userEmail, userName, password}=props;

  const handleLogin = (event)=>{
    event.preventDefault();
    
    if (userEmail == "hrAdmin@gmail.com" && password=="admin123"){
      setUserName("HR Admin");
      setIsAdminLogin(true);
      setIsLogin(false);
      navigate('/')
    }
    else{
      axios.post(`${ip}/login`,{userEmail:userEmail,password:password})
      .then((res)=>{
        if(res.data == "Error"){
          console.log(res.data)
        }
        else if(res.data == "Incorrect Email or Password"){
          console.log(res.data)
        }
        else{
          setUserId(res.data.data[0].employeeId)
          setUserName(res.data.data[0].name)
          setIsLogin(true)
          setIsAdminLogin(false)
          navigate('/employee/reimbursement')
        }
      })
      .catch((err)=>console.log(err))
    }

  }




  return (
    <>
     
        <div className="flex login-page">
          <div className="login-image w-1/3 font-bold">   
              <svg xmlns="http://www.w3.org/2000/svg" width="396" height="48" viewBox="0 0 223 28" fill="none"><g clip-path="url(#clip0_10_8)"><path d="M32.0798 21.5586V12.147H31.0093C30.3643 12.147 29.8411 11.5927 29.8411 10.9094V8.5673C29.8411 7.88396 30.3643 7.32963 31.0093 7.32963H32.0798V3.49115C32.0798 2.80781 32.603 2.25348 33.248 2.25348H36.228C36.873 2.25348 37.3962 2.80781 37.3962 3.49115V7.33034H40.6345C41.2794 7.33034 41.8026 7.88467 41.8026 8.56801V10.9101C41.8026 11.5934 41.2794 12.1478 40.6345 12.1478H37.3962V20.6335C37.3962 21.93 37.9562 22.5602 39.1103 22.5602C39.5298 22.5602 39.9359 22.5163 40.328 22.4255C41.0533 22.2568 41.7331 22.8721 41.7331 23.6589V25.6331C41.7331 26.1166 41.4674 26.5539 41.0546 26.7588C40.0898 27.238 38.9718 27.5258 37.5367 27.5258C34.3178 27.5244 32.0798 26.1534 32.0798 21.5586Z" fill="#2E67B1"></path><path d="M44.5994 21.448V21.3736C44.5994 17.0758 47.7119 15.0371 52.1538 15.0371C54.0774 15.0371 55.3713 15.371 56.7356 15.8523V15.5184C56.7356 13.1473 55.3713 11.8869 52.7138 11.8869C51.106 11.8869 49.9017 12.1116 48.6379 12.544C48.0243 12.7538 47.3646 12.4044 47.1639 11.7551L46.549 9.76599C46.3543 9.13723 46.6601 8.4546 47.2449 8.2228C48.9818 7.53308 50.8317 7.07019 53.4826 7.07019C56.4204 7.07019 58.449 7.84852 59.8126 9.29318C61.2116 10.7754 61.8412 12.9615 61.8412 15.6297V25.916C61.8412 26.5993 61.318 27.1536 60.673 27.1536H57.8683C57.2233 27.1536 56.7001 26.5993 56.7001 25.916V25.0044C55.4061 26.5235 53.6572 27.5244 51.0344 27.5244C47.5024 27.5244 44.5994 25.412 44.5994 21.448ZM56.8052 20.1508C56.8052 19.5079 56.401 18.9486 55.8183 18.7685C55.0943 18.5445 54.2854 18.4091 53.4123 18.4091C51.1388 18.4091 49.7398 19.3725 49.7398 21.151V21.2254C49.7398 22.7445 50.9287 23.6341 52.6429 23.6341C55.1613 23.6341 56.8052 22.2256 56.8052 20.1508Z" fill="#2E67B1"></path><path d="M65.5137 17.2608V17.1864C65.5137 11.5169 69.6057 6.84833 75.3409 6.84833C78.345 6.84833 80.3629 7.75992 81.9961 9.30878C82.4772 9.76458 82.4966 10.5578 82.057 11.0583L80.3737 12.9757C79.9475 13.4613 79.2369 13.5017 78.7599 13.0728C77.8098 12.2172 76.8008 11.7026 75.3055 11.7026C72.6473 11.7026 70.7592 14.1482 70.7592 17.1126V17.5273C70.7592 20.311 72.848 22.6531 75.4754 22.6708C76.9106 22.6807 77.9844 22.1654 79.0188 21.2977C79.4912 20.9015 80.1649 20.9313 80.5884 21.3856L82.1206 23.0274C82.5782 23.5179 82.5755 24.3175 82.1005 24.7889C80.4546 26.4221 78.4594 27.5251 75.2707 27.5251C69.6405 27.5244 65.5137 22.8927 65.5137 17.2608Z" fill="#2E67B1"></path><path d="M87.1654 0.475647H90.9349C91.3617 0.475647 91.7083 0.842128 91.7083 1.29509V14.8896L97.5861 8.06754C97.8075 7.81094 98.1207 7.6642 98.4485 7.6642H101.544C102.575 7.6642 103.101 8.9763 102.384 9.76172L97.1639 15.4822L103.372 25.6133C103.877 26.4363 103.319 27.5244 102.393 27.5244H99.0366C98.6332 27.5244 98.2585 27.3039 98.045 26.941L93.5964 19.3725L91.7076 21.4841V26.2867C91.7076 26.97 91.1844 27.5244 90.5395 27.5244H87.5594C86.9145 27.5244 86.3912 26.97 86.3912 26.2867V1.29438C86.3926 0.842128 86.7385 0.475647 87.1654 0.475647Z" fill="#2E67B1"></path><path d="M106.351 23.8142L107.232 22.3965C107.515 21.9407 108.089 21.8223 108.523 22.1172C110.328 23.3421 112.119 23.9673 113.803 23.9673C115.621 23.9673 116.671 23.1521 116.671 21.8549V21.7812C116.671 20.299 114.712 19.7432 112.544 19.0393C109.851 18.261 106.773 17.0382 106.773 13.333V13.2586C106.773 9.51648 109.676 7.25592 113.348 7.25592C115.379 7.25592 117.516 7.89602 119.325 8.96002C119.779 9.22726 119.949 9.82838 119.696 10.309L118.911 11.7983C118.667 12.2619 118.117 12.4434 117.674 12.1946C116.131 11.3269 114.559 10.8123 113.244 10.8123C111.6 10.8123 110.656 11.6643 110.656 12.739V12.8134C110.656 14.2212 112.649 14.8882 114.817 15.5928C117.475 16.4817 120.553 17.779 120.553 21.2992V21.3736C120.553 25.4864 117.546 27.5244 113.699 27.5244C111.311 27.5244 108.782 26.7468 106.594 25.1646C106.178 24.8647 106.074 24.2601 106.351 23.8142Z" fill="#4FB1E4"></path><path d="M125.415 21.7812V11.48H124.002C123.488 11.48 123.071 11.0384 123.071 10.494V8.61267C123.071 8.06826 123.488 7.62664 124.002 7.62664H125.415V3.2395C125.415 2.6951 125.831 2.25348 126.345 2.25348H128.717C129.23 2.25348 129.647 2.6951 129.647 3.2395V7.62664H133.683C134.197 7.62664 134.614 8.06826 134.614 8.61267V10.4947C134.614 11.0391 134.197 11.4807 133.683 11.4807H129.647V21.078C129.647 22.8197 130.486 23.5236 131.921 23.5236C132.414 23.5236 132.898 23.4583 133.37 23.3272C133.963 23.1627 134.543 23.627 134.543 24.2764V25.9209C134.543 26.298 134.343 26.6482 134.02 26.8077C133.098 27.2642 132.112 27.5258 130.732 27.5258C127.618 27.5244 125.415 26.0797 125.415 21.7812Z" fill="#4FB1E4"></path><path d="M139.81 7.9605H142.216C142.729 7.9605 143.146 8.40212 143.146 8.94652V12.3703C144.179 9.71918 145.994 7.86835 148.693 7.61316C149.229 7.56212 149.686 8.02642 149.686 8.59705V12.3335H149.441C145.699 12.3335 143.146 14.8896 143.146 20.0778V26.5397C143.146 27.0841 142.729 27.5258 142.216 27.5258H139.81C139.296 27.5258 138.879 27.0841 138.879 26.5397V8.94581C138.879 8.40141 139.296 7.9605 139.81 7.9605Z" fill="#4FB1E4"></path><path d="M151.714 17.372V17.2976C151.714 11.6657 155.456 7.10773 160.737 7.10773C166.613 7.10773 169.586 11.9989 169.586 17.6308C169.586 17.7399 169.583 17.8484 169.579 17.9583C169.558 18.4814 169.144 18.8911 168.65 18.8911H157.124C156.495 18.8911 156.033 19.5433 156.237 20.1742C157.01 22.5744 158.891 23.8567 161.262 23.8567C163.086 23.8567 164.381 23.2407 165.676 22.0824C166.026 21.7698 166.542 21.7847 166.884 22.1065L168.034 23.1882C168.437 23.5675 168.453 24.2288 168.07 24.6301C166.37 26.4093 164.172 27.525 161.191 27.525C155.877 27.5243 151.714 23.4115 151.714 17.372ZM164.273 15.9267C164.884 15.9267 165.334 15.3121 165.175 14.6869C164.601 12.4362 163.082 10.7761 160.703 10.7761C158.461 10.7761 156.831 12.2938 156.166 14.6564C155.988 15.2887 156.435 15.9267 157.059 15.9267H164.273Z" fill="#4FB1E4"></path><path d="M172.593 21.4848V21.4104C172.593 17.1487 175.741 15.1115 180.253 15.1115C182.351 15.1115 183.785 15.4454 185.219 15.9267V15.4454C185.219 12.6291 183.61 11.1844 180.637 11.1844C178.909 11.1844 177.583 11.5112 176.232 12.0407C175.746 12.2307 175.209 11.9549 175.039 11.4367L174.493 9.77093C174.329 9.2726 174.564 8.72181 175.029 8.53042C176.816 7.79391 178.652 7.29346 181.198 7.29346C183.961 7.29346 185.989 8.03422 187.319 9.47958C188.682 10.925 189.312 12.9629 189.312 15.5191V26.1307C189.312 26.6751 188.895 27.1168 188.381 27.1168H186.115C185.601 27.1168 185.184 26.6751 185.184 26.1307V24.6712C183.926 26.2647 182.002 27.5243 179.169 27.5243C175.706 27.5243 172.593 25.4495 172.593 21.4848ZM185.288 20.0763C185.288 19.2349 184.741 18.5062 183.969 18.3113C183.126 18.0986 182.158 17.9639 181.091 17.9639C178.329 17.9639 176.754 19.1499 176.754 21.2247V21.2991C176.754 23.189 178.293 24.2636 180.356 24.2636C183.155 24.2636 185.288 22.5963 185.288 20.0763Z" fill="#4FB1E4"></path><path d="M195.277 7.96051H197.683C198.196 7.96051 198.613 8.40213 198.613 8.94654V10.925C199.802 9.1833 201.411 7.55292 204.244 7.55292C206.902 7.55292 208.79 8.92385 209.77 10.9987C211.274 8.92385 213.198 7.55292 215.995 7.55292C220.052 7.55292 222.465 10.2579 222.465 15.0378V26.539C222.465 27.0835 222.049 27.5251 221.535 27.5251H219.164C218.65 27.5251 218.233 27.0835 218.233 26.539V16.4087C218.233 13.2961 216.869 11.6289 214.491 11.6289C212.148 11.6289 210.539 13.333 210.539 16.4824V26.539C210.539 27.0835 210.122 27.5251 209.608 27.5251H207.237C206.723 27.5251 206.306 27.0835 206.306 26.539V16.3719C206.306 13.2961 204.942 11.6289 202.564 11.6289C200.186 11.6289 198.612 13.4818 198.612 16.4824V26.539C198.612 27.0835 198.195 27.5251 197.681 27.5251H195.275C194.761 27.5251 194.345 27.0835 194.345 26.539V8.94583C194.346 8.40142 194.763 7.96051 195.277 7.96051Z" fill="#4FB1E4"></path><path d="M13.8972 6.68953C14.4244 6.99717 15.0902 7.27576 15.895 7.5274C16.6986 7.77905 17.6286 8.04487 18.683 8.32345C20.054 8.71474 21.2998 9.13439 22.4204 9.58097C23.5411 10.0283 24.4899 10.5868 25.268 11.2574C25.5483 11.4991 25.7979 11.765 26.0321 12.0414V5.03009C25.2265 4.36943 23.6622 3.13176 23.2902 2.87586C22.8018 2.54057 22.2084 2.21236 21.5098 1.89125C20.8455 1.58573 20.1269 1.32487 19.3548 1.10725C18.5713 0.886795 17.7664 0.754947 16.9562 0.740769C15.3464 0.712415 14.1541 1.00517 13.382 1.61905C12.6434 2.20598 12.274 3.03039 12.274 4.09155C12.274 4.70614 12.4125 5.21652 12.6895 5.62128C12.9679 6.02603 13.3693 6.38259 13.8972 6.68953Z" fill="#4FB1E4"></path><path d="M16.9 26.225C13.012 26.225 9.15687 24.9909 5.93933 22.4007C5.28699 21.8754 5.18128 20.8781 5.7065 20.2117L7.612 17.7931C8.09373 17.1821 8.94077 17.0644 9.55029 17.5308C11.8291 19.2768 14.197 20.3457 17.0224 20.3457C19.6338 20.3457 21.1432 19.2654 21.1432 17.4926V17.4061C21.1432 15.7204 20.1644 14.8124 15.3906 13.5591C9.59712 12.0471 5.92528 10.2749 5.92528 4.30987V4.22339C5.92528 2.8482 6.18421 1.58998 6.66393 0.475647H1.79379C1.09863 0.475647 0.535278 1.07251 0.535278 1.80831V26.1917C0.535278 26.9282 1.09863 27.5251 1.79379 27.5251H24.8077C25.5028 27.5251 26.0662 26.9282 26.0662 26.1917V21.8932C24.3367 24.7059 21.0328 26.225 16.9 26.225Z" fill="url(#paint0_linear_10_8)"></path></g><defs><linearGradient id="paint0_linear_10_8" x1="0.535278" y1="14" x2="26.0659" y2="14" gradientUnits="userSpaceOnUse"><stop stop-color="#2E67B1"></stop><stop offset="1" stop-color="#00AEEF"></stop></linearGradient><clipPath id="clip0_10_8"><rect width="223" height="28" fill="white"></rect></clipPath></defs></svg>
          </div>
          <div className="w-2/3">
            <div className="login-main">
              <div className="main-wrapper">
                <div className="page-content">
                  <div className="login-form-wrapper">
                    <div className="login-form-wrapper-inside">
                      <h1 className="title font-bold">
                        Welcome to Stackstream!
                      </h1>
                      <h4 className="tagline">
                        Please Log-in to your account and start the adventure
                      </h4>
                    </div>

                    <form class="login-form space-y-3" method="POST" onSubmit={handleLogin}>
                      <div className="login-input-group">
                        <div class="mt-2">
                          <input
                            onChange={(e)=>{
                              setUserEmail(e.target.value)
                            }}
                            placeholder="Email"
                            id="email"
                            name="email"
                            type="text"
                            autocomplete="email"
                            required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="login-input-group">
                        <div class="mt-2">
                          <input
                            onChange={(e)=>{
                              setPassword(e.target.value)
                            }}
                            placeholder="Password"
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div class="flex extra-fields">
                        <div class="mt-2 items-center justify-between">
                          <div class="flex gap-2 ">
                            <input
                              name="check"
                              id="check"
                              type="checkbox"
                              class="font-semibold text-indigo-600 hover:text-indigo-500"
                            />
                            <label htmlFor="check">Remember Me</label>
                          </div>
                        </div>
                        <div class="mt-2 items-center justify-between">
                          <div class="forgot-pass">
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
          </div>
        </div>
      
    </>
  );
}
