import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function TransferResource(props) {

    const {ip, eName, eId, eProjectId, projects, fetchResources} = props;

    const [transferToId, setTransferToId] = useState()
      

    const transferResource=(event)=>{
        event.preventDefault();
        axios.put(`${ip}/update_project`, {eId,transferToId})
        .then((res)=>{console.log(res.data); fetchResources()})
        .catch((err)=>console.log(err))   
    }

  return (
    <>
        <div className={`fixed-form ${props.showForm ? "block" : "hidden"}`}>
        <h6 class="form-title mb-4">Transfer Resource</h6>
        <div className="form-wrapper">
          <form class="max-w-md mx-auto" onSubmit={transferResource}>
            <div class="relative z-0 w-full mb-5 group">

            <h6 class="text-sm mb-2">Employee ID: {eId}</h6>
            <h6 class="text-sm mb-2">Employee Name: {eName}</h6>
            <h6 class="text-sm mb-2">Current Project: {eProjectId == null ? "Not Assigned":eProjectId}</h6>
            
            <h6 class="text-sm">Transfer To</h6>
            <select id="countries" class="rounded-lg block w-full p-2.5 border" onChange={(e)=>{
              setTransferToId(e.target.value)
            }}required>
                {projects.map((project)=>(
                    <option value={project.projectId}  selected >{project.projectId}</option>
                ))}
            </select>
              
            </div>
 

            <div className="flex gap-2 justify-end">

            
            <a
            onClick={() => {
                props.setShowForm(false);
              }}
              
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cancel
            </a>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Transfer
            </button>
            </div>
          </form>
        </div>
       
      </div>
    </>
  )
}
