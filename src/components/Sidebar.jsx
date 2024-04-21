import React from 'react'
import { Link } from 'react-router-dom';

export default function Sidebar(props) {

  const {isHRClicked, setisHRClicked, isFinanceClicked, setisFinanceClicked} = props;

  //Functins for dynamic second sidebar
  const onHRClick =()=>{
    setisHRClicked(true);
    setisFinanceClicked(false);
  }

  const onFinanceClick =()=>{
    setisFinanceClicked(true);
    setisHRClicked(false);
  }
  
  return (
    <>
     <aside
        id="logo-sidebar"
        class="sidebar fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full  border-r border-gray-200 sm:translate-x-0 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div class="sidebar-wrapper h-full">
          <ul class="space-y-2">
            <li>
              <Link
                onClick={onHRClick}
                to="/hr/reimbursement"
                class="flex p-1 items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <i class="fa-solid fa-gauge"></i>
                <p>HR</p>
              </Link>
            </li>
            <li>
              <Link
                onClick={onFinanceClick}
                to="/finance/tax"
                class="flex p-1 items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <i class="fa-solid fa-gauge"></i>
                <p>Finance</p>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}
