import React, { useEffect } from 'react'

export default function TaxTable(props) {

  const {employees, fetchResources} = props;

  useEffect(() => {
    fetchResources();
  }, [])
  
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-left rtl:text-right">
        <thead class="text-gray-700 bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Employee ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Salary
                </th>
                <th scope="col" class="px-6 py-3">
                    userName
                </th>
                <th scope="col" class="px-6 py-3">
                    Password
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
               
                <th scope="col" class="px-6 py-3">
                    Position
                </th>
            </tr>
        </thead>
        <tbody>
            {employees.map((employee)=>(

                <tr key={employee.employeeId} class="bg-white border-b dark:border-gray-700 ">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {employee.employeeId}
                    </th>
                    <td class="px-6 py-4">
                        {employee.name}
                    </td>
                    <td class="px-6 py-4">
                    {employee.salary}
                    </td>
                    <td class="px-6 py-4">
                    {employee.userEmail}
                    </td>
                    <td class="px-6 py-4">
                    {employee.password}
                    </td>
                    <td class="px-6 py-4">
                    {employee.reimbursementAmount}
                    </td>
                   
                    <td class="px-6 py-4">
                    {employee.position}
                    </td>
                      
                </tr>
            ))}
       
        </tbody>
    </table>

    <nav class="pagination flex items-center flex-column flex-wrap md:flex-row justify-between py-1" aria-label="Table navigation">
        <span class=" font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900">1-10</span> of <span class="font-semibold text-gray-900">1000</span></span>
        <ul class="inline-flex -space-x-px rtl:space-x-reverse  h-8">
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight">|</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight">4</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight">5</a>
            </li>
            <li>
        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight rounded-e-lg">|</a>
            </li>
        </ul>
    </nav>
</div>
  )
}
