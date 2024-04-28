import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function (props) {

    const {ip} = props;
  const [reimbursements, setReimbursements] = useState([])

  const FetchReimbursementsForAdmin = ()=>{
        // Fetching reimbursements data table
        axios.get(`${ip}/reimbursements`)
        .then((res)=>{console.log(res.data.result); setReimbursements(res.data.result)})
        .catch((err)=>console.log(err))   
  }

  useEffect(() => {
    FetchReimbursementsForAdmin();
  }, [])

  const approveReimbursement = (reimbursementId)=>{
    updateReimbursements(reimbursementId, "Approved")
  }

  const rejectReimbursement = (reimbursementId)=>{
    updateReimbursements(reimbursementId, "Rejected")
  }

  const updateReimbursements = async (reimbursementId, status)=>{
    await axios.post(`${ip}/update_reimbursement`, {reimbursementId, status})
      .then((res)=>console.log(res.data), FetchReimbursementsForAdmin())
      .catch((err)=>console.log(err))   
  }

  

    
    
  return (
    <>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-left rtl:text-right">
        <thead class="text-gray-700 bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Reibursement ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Image
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Employee ID
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                
            </tr>
        </thead>
        <tbody>
            {reimbursements.map((reimbursement)=>(

                <tr key={reimbursement.reimbursementId} class="bg-white border-b dark:border-gray-700 ">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        {reimbursement.reimbursementId}
                    </th>
                    <td class="px-6 py-4">
                        {reimbursement.image}
                    </td>
                    <td class="px-6 py-4">
                    {reimbursement.amount}
                    </td>
                    <td class="px-6 py-4">
                    {reimbursement.description}
                    </td>
                    <td class="px-6 py-4">
                    {reimbursement.type}
                    </td>
                    <td class="px-6 py-4">
                    {reimbursement.employeeId}
                    </td>
                    <td class="px-6 py-4">
                    {reimbursement.status}
                    </td>
                    <td class="px-6 py-4">
                        <a onClick={()=>{approveReimbursement(reimbursement.reimbursementId)}}  class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Approve</a>
                    </td>
                    <td class="px-6 py-4">
                        <a onClick={()=>{rejectReimbursement(reimbursement.reimbursementId)}} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Reject</a>
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
  )
}
