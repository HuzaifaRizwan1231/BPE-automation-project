import React, { useState } from "react";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import SecondSidebar from "./SecondSidebar";

export default function Navbar(props) {

  const {ip, isLogin, isAdminLogin}=props;

  //Defining varibles for dynamic sidebars
  const [isHRClicked, setisHRClicked] = useState(true);
  const [isFinanceClicked, setisFinanceClicked] = useState(false);

  return (
    <>
      <nav class="navbar shadow-md fixed top-0 z-50 w-full border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="navbar-wrapper px-3 py-3 lg:px-5 lg:pl-3">
          <div class="navbar-wrapper-inside flex items-center justify-between">
            <div class="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span class="sr-only">Open sidebar</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="https://flowbite.com" class="flex ms-2 md:me-24">
                {/* <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  class="h-8 me-3"
                  alt="FlowBite Logo"
                /> */}
                <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="212" height="26" viewBox="0 0 212 26" fill="none"><path d="M30.1346 20.1514V11.1562H29.112C28.4959 11.1562 27.9961 10.6263 27.9961 9.97323V7.73475C27.9961 7.08163 28.4959 6.55182 29.112 6.55182H30.1346V2.88312C30.1346 2.23001 30.6344 1.7002 31.2505 1.7002H34.0972C34.7133 1.7002 35.2131 2.23001 35.2131 2.88312V6.5525H38.3065C38.9226 6.5525 39.4224 7.08231 39.4224 7.73542V9.97391C39.4224 10.627 38.9226 11.1568 38.3065 11.1568H35.2131V19.2673C35.2131 20.5064 35.7481 21.1087 36.8506 21.1087C37.2513 21.1087 37.6393 21.0667 38.0138 20.98C38.7066 20.8188 39.356 21.4068 39.356 22.1589V24.0457C39.356 24.5078 39.1022 24.9258 38.7079 25.1216C37.7863 25.5796 36.7183 25.8547 35.3474 25.8547C32.2725 25.8533 30.1346 24.543 30.1346 20.1514Z" fill="#0E111A"></path><path d="M42.0938 20.0456V19.9744C42.0938 15.8667 45.067 13.9182 49.3102 13.9182C51.1476 13.9182 52.3837 14.2373 53.6869 14.6973V14.3782C53.6869 12.112 52.3837 10.9074 49.8451 10.9074C48.3093 10.9074 47.1588 11.1221 45.9515 11.5354C45.3654 11.736 44.7353 11.4019 44.5435 10.7814L43.9562 8.88027C43.7702 8.27932 44.0623 7.62688 44.6209 7.40534C46.28 6.74612 48.0472 6.30371 50.5795 6.30371C53.3859 6.30371 55.3237 7.04761 56.6263 8.42837C57.9627 9.84504 58.5641 11.9345 58.5641 14.4846V24.3159C58.5641 24.969 58.0643 25.4988 57.4482 25.4988H54.7689C54.1528 25.4988 53.653 24.969 53.653 24.3159V23.4446C52.417 24.8965 50.7463 25.8532 48.2409 25.8532C44.8669 25.8532 42.0938 23.8342 42.0938 20.0456ZM53.7534 18.8057C53.7534 18.1912 53.3673 17.6567 52.8107 17.4846C52.1191 17.2705 51.3464 17.1411 50.5124 17.1411C48.3406 17.1411 47.0042 18.0618 47.0042 19.7617V19.8328C47.0042 21.2847 48.1399 22.135 49.7774 22.135C52.183 22.135 53.7534 20.7888 53.7534 18.8057Z" fill="#0E111A"></path><path d="M62.0703 16.0437V15.9726C62.0703 10.5539 65.9792 6.0918 71.4578 6.0918C74.3275 6.0918 76.2551 6.96307 77.8153 8.44342C78.2748 8.87906 78.2933 9.63719 77.8734 10.1155L76.2654 11.9482C75.8582 12.4123 75.1795 12.4509 74.7238 12.041C73.8162 11.2232 72.8524 10.7314 71.424 10.7314C68.8847 10.7314 67.0811 13.0688 67.0811 15.9021V16.2984C67.0811 18.959 69.0764 21.1975 71.5863 21.2144C72.9572 21.2239 73.983 20.7314 74.9711 19.9021C75.4224 19.5234 76.066 19.5518 76.4705 19.9861L77.9341 21.5552C78.3713 22.024 78.3687 22.7883 77.915 23.2388C76.3427 24.7998 74.4368 25.854 71.3907 25.854C66.0125 25.8533 62.0703 21.4265 62.0703 16.0437Z" fill="#0E111A"></path><path d="M82.7551 0.000976562H86.356C86.7637 0.000976562 87.0948 0.351248 87.0948 0.784174V13.7774L92.7095 7.25707C92.9211 7.01182 93.2202 6.87157 93.5334 6.87157H96.4906C97.4755 6.87157 97.9772 8.12564 97.2927 8.87631L92.3062 14.3438L98.2367 24.0267C98.7186 24.8133 98.1862 25.8533 97.301 25.8533H94.0952C93.7098 25.8533 93.3519 25.6426 93.148 25.2957L88.8984 18.062L87.0941 20.0802V24.6704C87.0941 25.3235 86.5943 25.8533 85.9782 25.8533H83.1315C82.5154 25.8533 82.0156 25.3235 82.0156 24.6704V0.783497C82.0169 0.351248 82.3473 0.000976562 82.7551 0.000976562Z" fill="#0E111A"></path><path d="M101.081 22.3073L101.923 20.9523C102.193 20.5167 102.742 20.4035 103.156 20.6854C104.88 21.8561 106.591 22.4537 108.2 22.4537C109.937 22.4537 110.939 21.6745 110.939 20.4347V20.3642C110.939 18.9476 109.068 18.4164 106.997 17.7436C104.425 16.9997 101.485 15.831 101.485 12.2897V12.2186C101.485 8.64201 104.258 6.48145 107.765 6.48145C109.706 6.48145 111.746 7.09323 113.475 8.11017C113.909 8.36559 114.071 8.94012 113.829 9.39947L113.08 10.8229C112.846 11.266 112.321 11.4394 111.898 11.2016C110.423 10.3724 108.922 9.8805 107.666 9.8805C106.095 9.8805 105.193 10.6949 105.193 11.722V11.7931C105.193 13.1386 107.097 13.7762 109.169 14.4496C111.708 15.2992 114.648 16.539 114.648 19.9035V19.9747C114.648 23.9056 111.775 25.8534 108.1 25.8534C105.819 25.8534 103.403 25.1102 101.313 23.598C100.916 23.3114 100.817 22.7335 101.081 22.3073Z" fill="#0E111A"></path><path d="M119.29 20.3641V10.5186H117.94C117.449 10.5186 117.051 10.0965 117.051 9.57621V7.77811C117.051 7.25778 117.449 6.8357 117.94 6.8357H119.29V2.64261C119.29 2.12228 119.688 1.7002 120.179 1.7002H122.444C122.935 1.7002 123.333 2.12228 123.333 2.64261V6.8357H127.188C127.679 6.8357 128.077 7.25778 128.077 7.77811V9.57689C128.077 10.0972 127.679 10.5193 127.188 10.5193H123.333V19.6921C123.333 21.3567 124.134 22.0295 125.505 22.0295C125.976 22.0295 126.438 21.9671 126.889 21.8418C127.455 21.6846 128.01 22.1284 128.01 22.749V24.3208C128.01 24.6812 127.818 25.0159 127.51 25.1683C126.629 25.6047 125.687 25.8547 124.369 25.8547C121.394 25.8533 119.29 24.4725 119.29 20.3641Z" fill="#0E111A"></path><path d="M133.041 7.15499H135.34C135.831 7.15499 136.229 7.57707 136.229 8.0974V11.3698C137.215 8.83588 138.949 7.06691 141.527 6.82301C142.04 6.77423 142.476 7.21799 142.476 7.76339V11.3345H142.242C138.668 11.3345 136.229 13.7776 136.229 18.7363V24.9124C136.229 25.4328 135.831 25.8548 135.34 25.8548H133.041C132.551 25.8548 132.152 25.4328 132.152 24.9124V8.09672C132.152 7.5764 132.551 7.15499 133.041 7.15499Z" fill="#0E111A"></path><path d="M144.414 16.1501V16.079C144.414 10.6962 147.989 6.33984 153.033 6.33984C158.646 6.33984 161.486 11.0146 161.486 16.3974C161.486 16.5018 161.483 16.6054 161.479 16.7104C161.46 17.2104 161.064 17.602 160.592 17.602H149.581C148.981 17.602 148.54 18.2253 148.734 18.8283C149.473 21.1224 151.27 22.348 153.534 22.348C155.277 22.348 156.514 21.7592 157.751 20.6522C158.085 20.3534 158.578 20.3676 158.905 20.6752L160.004 21.7091C160.388 22.0716 160.404 22.7037 160.038 23.0871C158.414 24.7877 156.315 25.8541 153.467 25.8541C148.39 25.8534 144.414 21.9225 144.414 16.1501ZM156.411 14.7687C156.995 14.7687 157.424 14.1813 157.272 13.5837C156.724 11.4327 155.273 9.84594 153.001 9.84594C150.858 9.84594 149.301 11.2965 148.666 13.5546C148.496 14.1589 148.924 14.7687 149.519 14.7687H156.411Z" fill="#0E111A"></path><path d="M164.359 20.0813V20.0101C164.359 15.937 167.366 13.9898 171.676 13.9898C173.68 13.9898 175.051 14.3089 176.42 14.7689V14.3089C176.42 11.6172 174.883 10.2364 172.044 10.2364C170.392 10.2364 169.126 10.5487 167.835 11.0548C167.371 11.2364 166.858 10.9729 166.695 10.4776L166.174 8.88546C166.018 8.40918 166.242 7.88275 166.686 7.69983C168.393 6.9959 170.147 6.51758 172.579 6.51758C175.219 6.51758 177.156 7.22557 178.426 8.60701C179.728 9.98845 180.33 11.9363 180.33 14.3794V24.5216C180.33 25.042 179.932 25.4641 179.441 25.4641H177.276C176.785 25.4641 176.387 25.042 176.387 24.5216V23.1267C175.185 24.6497 173.347 25.8536 170.641 25.8536C167.333 25.8536 164.359 23.8706 164.359 20.0813ZM176.486 18.7351C176.486 17.9309 175.964 17.2344 175.226 17.0481C174.421 16.8448 173.496 16.7161 172.477 16.7161C169.838 16.7161 168.334 17.8496 168.334 19.8326V19.9038C168.334 21.71 169.804 22.7371 171.775 22.7371C174.449 22.7371 176.486 21.1436 176.486 18.7351Z" fill="#0E111A"></path><path d="M186.027 7.15421H188.325C188.816 7.15421 189.214 7.5763 189.214 8.09663V9.98755C190.35 8.32291 191.887 6.76465 194.593 6.76465C197.132 6.76465 198.936 8.07495 199.872 10.058C201.309 8.07495 203.146 6.76465 205.818 6.76465C209.694 6.76465 211.999 9.35001 211.999 13.9184V24.911C211.999 25.4313 211.601 25.8534 211.11 25.8534H208.845C208.354 25.8534 207.956 25.4313 207.956 24.911V15.2287C207.956 12.2538 206.654 10.6603 204.382 10.6603C202.143 10.6603 200.606 12.289 200.606 15.2992V24.911C200.606 25.4313 200.208 25.8534 199.717 25.8534H197.452C196.961 25.8534 196.563 25.4313 196.563 24.911V15.1935C196.563 12.2538 195.26 10.6603 192.988 10.6603C190.716 10.6603 189.213 12.4313 189.213 15.2992V24.911C189.213 25.4313 188.815 25.8534 188.324 25.8534H186.026C185.535 25.8534 185.137 25.4313 185.137 24.911V8.09595C185.138 7.57562 185.536 7.15421 186.027 7.15421Z" fill="#0E111A"></path><path d="M12.7654 5.93938C13.269 6.23342 13.9049 6.49968 14.6738 6.7402C15.4414 6.98071 16.3298 7.23478 17.3371 7.50104C18.6466 7.87502 19.8367 8.2761 20.9072 8.70293C21.9778 9.13044 22.8841 9.66432 23.6274 10.3052C23.8952 10.5363 24.1336 10.7903 24.3573 11.0546V4.35334C23.5877 3.7219 22.0935 2.53898 21.7381 2.2944C21.2715 1.97394 20.7046 1.66025 20.0374 1.35334C19.4027 1.06134 18.7163 0.812013 17.9787 0.604019C17.2303 0.393314 16.4615 0.267298 15.6875 0.253748C14.1497 0.226648 13.0108 0.506458 12.2732 1.09318C11.5676 1.65415 11.2148 2.44209 11.2148 3.45632C11.2148 4.04372 11.3471 4.53153 11.6117 4.91838C11.8776 5.30524 12.2611 5.64602 12.7654 5.93938Z" fill="#0E111A"></path><path d="M15.6325 24.6104C11.9185 24.6104 8.23582 23.4309 5.16224 20.9553C4.53909 20.4532 4.43811 19.5 4.93983 18.8631L6.76007 16.5515C7.22024 15.9675 8.02938 15.855 8.61162 16.3008C10.7885 17.9695 13.0504 18.9912 15.7494 18.9912C18.2439 18.9912 19.6858 17.9587 19.6858 16.2642V16.1816C19.6858 14.5705 18.7508 13.7026 14.1906 12.5047C8.65636 11.0596 5.14882 9.36585 5.14882 3.66463V3.58198C5.14882 2.26761 5.39617 1.06504 5.85442 0H1.2022C0.538146 0 0 0.57046 0 1.27371V24.5786C0 25.2825 0.538146 25.853 1.2022 25.853H23.1863C23.8504 25.853 24.3885 25.2825 24.3885 24.5786V20.4702C22.7364 23.1585 19.5804 24.6104 15.6325 24.6104Z" fill="#0E111A"></path></svg>
                </span>
              </a>
            </div>
            <Profile/>
          </div>
        </div>
      </nav>
      <Sidebar isLogin={isLogin} isAdminLogin={isAdminLogin} isHRClicked={isHRClicked} setisHRClicked={setisHRClicked} isFinanceClicked={isFinanceClicked} setisFinanceClicked={setisFinanceClicked}/>
      <SecondSidebar isLogin={isLogin} isAdminLogin={isAdminLogin} isHRClicked={isHRClicked} isFinanceClicked={isFinanceClicked}/>
     
    </>
  );
}
