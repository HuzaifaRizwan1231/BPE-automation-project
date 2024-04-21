import React from 'react'

export default function SecondSidebar() {
  return (
    <>
    <aside
        id="logo-sidebar"
        class="second-sidebar fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full border-r border-gray-200 sm:translate-x-0 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div class="second-sidebar-wrapper h-full">
          <ul class="space-y-1">
            <li>
              <a
                href="#"
                class="flex p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <p>Reimbursement</p>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex p-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <p>Resource Allocation</p>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}
