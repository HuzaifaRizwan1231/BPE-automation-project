import React from 'react'
import { Link } from 'react-router-dom';

export default function SecondSidebar(props) {

  const {isHRClicked, isFinanceClicked, isLogin, isAdminLogin} = props;

  return (
    <>
    <aside
        id="logo-sidebar"
        class="second-sidebar fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full border-r border-gray-200 sm:translate-x-0 dark:border-gray-700"
        aria-label="Sidebar"
      >
        {isLogin && <div class="second-sidebar-wrapper h-full">
          <ul class="space-y-1">

            {isHRClicked && 
            <>
              <li>
              <Link
                to="employee/reimbursement"
                class="flex p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <p>Reimbursement</p>
              </Link>
              </li>
            </>
            }

            {/* {isFinanceClicked && 
            <>
              <li>
              <Link
                to="/finance/tax"
                class="flex p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <p>Tax Calculation</p>
              </Link>
              </li>
            </>
            } */}


            
          </ul>
        </div>}

        {isAdminLogin && 
        <div class="second-sidebar-wrapper h-full">
          <ul class="space-y-1">

            {isHRClicked && 
            <>
              <li>
              <Link
                to="hr/reimbursement"
                class="flex p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <p>Reimbursement</p>
              </Link>
              </li>
              <li>
                <Link
                  to="hr/resource"
                  class="flex p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <p>Resource Allocation</p>
                </Link>
              </li>
              <li>
                <Link
                  to="hr/add_employee"
                  class="flex p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <p>Add Employee</p>
                </Link>
              </li>
              <li>
                <Link
                  to="hr/reimbursement_history"
                  class="flex p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <p>History</p>
                </Link>
              </li>
            </>
            }

            {isFinanceClicked && 
            <>
              <li>
              <Link
                to="/finance/tax"
                class="flex p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <p>Tax Calculation</p>
              </Link>
              </li>
            </>
            }


            
          </ul>
        </div>}
        
      </aside>
    </>
  )
}
