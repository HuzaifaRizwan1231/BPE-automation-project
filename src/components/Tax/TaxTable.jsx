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
                    ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Salary
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
                    {employee.userEmail}
                    </td>
                    <td class="px-6 py-4">
                    PKR {employee.salary}
                    </td>                  
                    <td class="px-6 py-4">
                    <div className="status-badge status-badge-approve text-center ">{employee.position}</div>
                    </td>
                      
                </tr>
            ))}
       
        </tbody>
    </table>

    {employees.length != 0 &&
    <nav class="pagination h-12 flex items-center flex-column flex-wrap md:flex-row justify-between py-1" aria-label="Table navigation">
        <span class=" font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900">{employees.length}</span> records </span>
    </nav>
    }

    {employees.length == 0 &&
        <div className='text-center text-sm px-6 py-10 font-medium text-gray-900 whitespace-nowrap'><h2>There are no records to display</h2></div>
    }
</div>
  )
}
