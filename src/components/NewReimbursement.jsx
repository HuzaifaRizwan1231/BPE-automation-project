import axios from "axios";
import React, { useRef, useState } from "react";

export default function NewReimbursement(props) {

  const {ip, userId,FetchReimbursements, showForm, setShowForm} = props;

  const [file, setfile] = useState(null)
  const [amount, setAmount] = useState(0)
  const [type, setType] = useState("medical")
  const [description, setDescription] = useState("")
  const fileRef = useRef();

  
  const raiseReimbursement = (event)=>{
    event.preventDefault();

    setShowForm(false);
    // appending the file in formData
    const formData = new FormData();
    formData.append('file', file);
    formData.append('amount', amount);
    formData.append('userId', userId);
    formData.append('status', 'Pending');
    formData.append('type', type);
    formData.append('description', description);

      //RAISING NEW REIMBURSEMENT
    axios.post(`${ip}/insert_reimbursement`, formData)
    .then((res)=>{
      console.log(res.data);
      FetchReimbursements();
    }
    )
  }

  return (
    <>
      <div className={`fixed-form ${showForm ? "block" : "hidden"}`}>
        <h6 class="form-title mb-4 font-bold">New Reimbursement</h6>
        <div className="form-wrapper">
          <form class="max-w-md mx-auto" onSubmit={raiseReimbursement}>
            <div class="relative z-0 w-full mb-5 group">

            <select id="countries" class="rounded-lg block w-full p-2.5 border" onChange={(e)=>{
              setType(e.target.value);
            }}required>
              <option value="medical"  selected >Medical</option>
              <option value="gym" >Gym</option>  
            </select>
              
            </div>
            <div class="relative z-0 w-full mb-5 group">
            <input onChange={(e)=>{
              setAmount(e.target.value)
            }} type="number" id="first_name" class="rounded-lg block w-full p-2.5 border" placeholder="0" required />
            </div>
            <div class="relative z-0 w-full mb-5 group">
            <textarea onChange={(e)=>{
              setDescription(e.target.value)
            }} type="text" id="large-input" required placeholder="Description" class="rounded-lg block w-full p-2.5 border"/>
            </div>
            
            <div class="flex items-center justify-center mb-5 w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer ">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        <p class={`text-sm mt-2 font-semibold ${file == null ? "text-red-500 dark:text-red-400" : "text-gray-500 dark:text-gray-400" }`}>{file == null ? "Please Select A File": file.name}</p>

                    </div>
                    <input ref={fileRef} onChange={(e)=>{
                              setfile(e.target.files[0])
                          }}
                    id="dropzone-file" type="file" class="hidden" required/>
                </label>
            </div> 

            <div className="flex gap-2 justify-end">

            
            <a
            onClick={() => {
                setShowForm(false);
              }}
              
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cancel
            </a>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </button>
            </div>
          </form>
        </div>
       
      </div>
    </>
  );
}
