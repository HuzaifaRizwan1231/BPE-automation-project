import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function HistoryTable(props) {
    const {ip, setShowForm, FetchReimbursementsForAdmin, reimbursements, setReimbursementId, setReimbursementAmount, setReimbursementType, setEmployeeId, setImage, setDescription, setEmployeeName, setRemainingAmount, setReimbursementStatus} = props;
  
    useEffect(() => {
        FetchReimbursementsForAdmin();
      }, [])

      const openReimbursementDetails=async(id, amount, type, eId, description, image, name, remainingAmount, status)=>{
          await setReimbursementId(id);
          await setReimbursementAmount(amount);
          await setReimbursementType(type);
          await setEmployeeId(eId);
          await setImage(image);
          await setDescription(description);
          await setEmployeeName(name);
          await setRemainingAmount(remainingAmount);
          await setReimbursementStatus(status);
          setShowForm(true);
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
                    Amount
                </th>
                <th scope="col" class="px-6 py-3">
                    Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
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
                    {reimbursement.name}
                    </td>
                    <td class="px-6 py-4">
                    {reimbursement.userEmail}
                    </td>
                    <td class="px-6 py-4">
                    PKR {reimbursement.amount}
                    </td>
                    <td class="px-6 py-4">
                    {reimbursement.type == "gym" && <><i class="fa-solid fa-dumbbell"></i> Gym</>}
                    {reimbursement.type == "medical" && <><i class="fa-solid fa-notes-medical"></i> Medical</>}
                    </td>
                    <td class="px-6 py-4">
                    <div className={`status-badge status-badge-${reimbursement.status == "Pending" ? "pending" : reimbursement.status == "Approved" ? "approve" : "reject"} text-center`}>{reimbursement.status}</div>
                    </td>
                    <td class="px-6 py-4">
                    {reimbursement.description}
                    </td>
                    
                    
                    
                    <td class="px-6 py-4">
                        <a onClick={()=>openReimbursementDetails(reimbursement.reimbursementId, reimbursement.amount, reimbursement.type, reimbursement.employeeId, reimbursement.description, reimbursement.image, reimbursement.name, reimbursement.reimbursementAmount, reimbursement.status)}  class="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer">Details</a>
                    </td>

                </tr>
            ))}
       
        </tbody> 
        
    </table>

    {reimbursements.length != 0 &&
    <nav class="pagination h-12 flex items-center flex-column flex-wrap md:flex-row justify-between py-1" aria-label="Table navigation">
        <span class=" font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900">{reimbursements.length}</span> records </span>
    </nav>
    }

    {reimbursements.length == 0 &&
        <div className='text-center text-sm px-6 py-10 font-medium text-gray-900 whitespace-nowrap'><h2>There are no records to display</h2></div>
    }
</div>
    </>
  )
}
