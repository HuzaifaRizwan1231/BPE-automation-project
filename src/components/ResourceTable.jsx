import axios from "axios";
import React, { useEffect, useState } from "react";


export default function ResourceTable(props) {

  // USESTATES
  const {ip, setShowForm ,setEId, setEName, setEProjectId, fetchProjects, fetchResources, employees, setEProjectName} = props;

  useEffect(() => {
      fetchResources();  
  }, [])

  
  const openTransferResourceForm = async (id, name, projectId, projectName)=>{
    await setEId(id);
    await setEName(name);
    await setEProjectId(projectId);
    await setShowForm(true);
    await setEProjectName(projectName);
    await fetchProjects(projectId);
  }

  return (
    <>
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
                <th scope="col" class="px-6 py-3">
                    Project
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
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
                   
                        <td class="px-6 py-4">
                    {employee.projectId == 0 ? "Not Assigned": employee.pName}
                    </td>
                    
                    <td class="px-6 py-4">
                        <a onClick={()=>{
                    openTransferResourceForm(employee.employeeId, employee.name, employee.projectId, employee.pName);
                  }} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Transfer</a>
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
    </>
  );
}
