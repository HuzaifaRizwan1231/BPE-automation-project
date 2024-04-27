import React from "react";

export default function NewReimbursement(props) {
  return (
    <>
      <div className={`fixed-form ${props.showForm ? "block" : "hidden"}`}>
        <h6 class="form-title mb-4">New Reimbursement</h6>
        <div className="form-wrapper">
          <form class="max-w-md mx-auto">
            <div class="relative z-0 w-full mb-5 group">
            <select id="countries" class="rounded-lg block w-full p-2.5 border">
            <option selected>Choose type</option>
            <option value="gym">Gym</option>
            <option value="medical">Medical</option>
    
            </select>
              
            </div>
            <div class="relative z-0 w-full mb-5 group">
            <input type="number" id="first_name" class="rounded-lg block w-full p-2.5 border" placeholder="0" required />
            </div>
            <div class="relative z-0 w-full mb-5 group">
            <textarea type="text" id="large-input" placeholder="Description" class="rounded-lg block w-full p-2.5 border"/>
            </div>
            
            <div class="flex items-center justify-center mb-5 w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer ">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div> 

            <div className="flex gap-2 justify-end">

            
            <button
            onClick={() => {
                props.setShowForm(false);
              }}
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Cancel
            </button>
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
