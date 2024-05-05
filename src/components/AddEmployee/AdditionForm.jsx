import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdditionForm(props) {
    const navigate = useNavigate();
    const {ip} = props;

    const [eName, setEName] = useState();
    const [eEmail, setEEmail] = useState();
    const [ePassword, setEPassword] = useState();
    const [eSalary, setESalary] = useState();
    const [eReimbursementAmount, setEReimbursementAmount] = useState();
    const [ePosition, setEPosition] = useState();
    const [returnMessage, setReturnMessage] = useState("");

    // Optional
    // const redirect = ()=>{
    //     if (returnMessage == "Employee Added Successfully"){
    //         navigate("/hr/resource")
    //     }
    // }

    const insertEmployee = (event)=>{
        event.preventDefault();
        axios.post(`${ip}/add_employee`, {eName, eEmail, ePassword, eSalary, eReimbursementAmount, ePosition})
        .then((res)=>setReturnMessage(res.data))
        .catch((err)=>console.log(err))
    }

  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div class="w-full text-left rtl:text-right">
        <form class="max-w-md mx-auto py-10" onSubmit={insertEmployee}> 
            {/* Name */}
          <div class="relative z-0 w-full mb-5 group">
            <input
            onChange={(e)=>{
              setEName(e.target.value);
            }}
              type="text"
              class="rounded-lg block w-full p-2.5 border"
              placeholder="Name"
              required
            />
          </div>
          {/* Email */}
          <div class="relative z-0 w-full mb-5 group">
            <input
            onChange={(e)=>{
              setEEmail(e.target.value);
            }}
              type="email"
              class="rounded-lg block w-full p-2.5 border"
              placeholder="Email"
              required
            />
          </div>
          {/* Password */}
          <div class="relative z-0 w-full mb-5 group">
            <input
            onChange={(e)=>{
              setEPassword(e.target.value);
            }}
              type="password"
              class="rounded-lg block w-full p-2.5 border"
              placeholder="Password"
              required
            />
          </div>
          {/* Salary */}
          <div class="relative z-0 w-full mb-5 group">
            <input
            onChange={(e)=>{
              setESalary(e.target.value);
            }}
              type="number"
              class="rounded-lg block w-full p-2.5 border"
              placeholder="Salary"
              required
            />
          </div>
          {/* Reimbursement Amount */}
          <div class="relative z-0 w-full mb-5 group">
            <input
            onChange={(e)=>{
              setEReimbursementAmount(e.target.value);
            }}
              type="number"
              class="rounded-lg block w-full p-2.5 border"
              placeholder="Reimbursement Amount"
              required
            />
          </div>
          {/* Position */}
          <div class="relative z-0 w-full mb-5 group">
            <input
            onChange={(e)=>{
                setEPosition(e.target.value);
            }}
              type="text"
              class="rounded-lg block w-full p-2.5 border"
              placeholder="Position"
              required
            />
          </div>

            {returnMessage == "Email Already Exists" &&  <div className="w-full mt-4">
                <h6 class="employee-exists mb-2">* {returnMessage}</h6>
            </div>}

            {returnMessage == "Employee Added Successfully" &&  <div className="w-full mt-4">
                <h6 class="employee-inserted mb-2">{returnMessage}</h6>
            </div>}
           

          <div className="flex gap-2 justify-end">
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
  );
}
