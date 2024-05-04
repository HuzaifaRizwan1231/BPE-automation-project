import React, { useState } from 'react'


export default function ReimbursementDetail(props) {

    const {ip, showForm, setShowForm, approveReimbursement, rejectReimbursement ,reimbursementId ,reimbursementAmount, reimbursementType, employeeId, image, description, employeeName, remainingAmount} = props;
  return (
    <>
       <div className={`fixed-form ${showForm ? "block" : "hidden"}`}>
        <h6 class="form-title mb-4 font-bold">Reimbursement Details</h6>
        <div className="transfer-form-wrapper">
            <div className="w-1/2">
            <h6 class="transfer-tag mb-2">Reimbursement ID</h6>
            <h6 class="transfer-value mb-2">{reimbursementId}</h6>

            </div>
            <div className="w-1/2">
                <h6 class="transfer-tag mb-2">Type</h6>
                <h6 class="transfer-value mb-2">{reimbursementType}</h6>

            </div>
            <div className="w-1/2">
                <h6 class="transfer-tag mb-2">Employee ID</h6>
                <h6 class="transfer-value mb-2">{employeeId}</h6>

            </div>
            <div className="w-1/2">
                <h6 class="transfer-tag mb-2">Name</h6>
                <h6 class="transfer-value mb-2">{employeeName}</h6>

            </div>
            <div className="w-1/2">
            <h6 class="transfer-tag mb-2">Amount</h6>
            <h6 class="transfer-value mb-2">{reimbursementAmount}</h6>

            </div>
           
           
            <div className="w-1/2">
                <h6 class="transfer-tag mb-2">Description</h6>
                <h6 class="transfer-value mb-2">{description}</h6>

            </div>
            <div className="w-full">
                <h6 class="transfer-tag mb-2">Image</h6>
                {/* <h6 class="transfer-value mb-2">{image}</h6> */}
                <img className="mx-auto mt-5  w-75" src={`/src/images/ReimbursementImages/${image}`} alt="hello" />

            </div>
            <div className="w-1/2">
                <h6 class="transfer-tag mb-2">Remaining Reimbursement</h6>
                <h6 class="transfer-value mb-2">{remainingAmount}</h6>

            </div>

            {(reimbursementAmount>remainingAmount) && 
              <div className="w-full mt-4">
                <h6 class="reimbursement-exceeded mb-2">* Reimbursement Amount Exceeded</h6>
              </div>
            }
           
            <div className="w-full">

            {/* <h6 class="transfer-tag">Employee ID</h6> */}

          <form class="transfer-project-field max-w-md mx-auto" >
            {/* <div class="relative z-0 w-full mb-5 group">
                <select id="countries" class="rounded-lg block w-full p-2.5 border" onChange={(e)=>{
               
                }}required>
                    {projects.map((project)=>(
                        <option value={project.projectId}  selected >{project.projectId}</option>
                    ))}
                </select>
              
            </div> */}
 

            <div className="flex gap-2 justify-end">

            
            <a
            onClick={() => {
                setShowForm(false);
              }}
              
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cancel
            </a>
            <a
            disabled
              onClick={() => {
                rejectReimbursement(reimbursementId);
              }}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Reject
            </a>
            {reimbursementAmount > remainingAmount ?
            <>
             <a
                class="text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg px-5 py-2.5 text-center"
              >
                Approve
              </a>
            </>
            :
            <>
              <a
                onClick={() => {
                  approveReimbursement(reimbursementId, employeeId, reimbursementAmount);
                }}
                class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Approve
              </a>
            </> }
            </div>
          </form>
            </div>

        </div>
       
      </div>
    </>
  )
}
