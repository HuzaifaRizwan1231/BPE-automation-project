import React, { useEffect, useState } from 'react'
import TaxTable from '../components/Tax/TaxTable'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CSVLink } from "react-csv"; 

export default function Tax(props) {
  
  const {userEmail, ip}=props;

  const [employees, setEmployees] = useState([])

  //Headers for csv file
  const headers = [
    { label: "Employee ID", key: "employeeId" },
    { label: "Employee Name", key: "employeeName" },
    { label: "Salary", key: "employeeSalary" },
    { label: "Position", key: "employeePosition" },
    { label: "Tax", key: "employeeTaxOnSalary" },
    { label: "Salary After Tax", key: "salaryAfterTax" },
  ];
  
  //Getting tax rate based on salary
  const getTaxFromSalary = (salary)=>{
    let taxRate;

    if (salary > 0 && salary <= 50000){
      taxRate = 0.05;
    }
    else if (salary > 50000 && salary <= 100000){
      taxRate = 0.1;
    }
    else if (salary > 100000 && salary <= 150000){
      taxRate = 0.15;
    }
    else if (salary > 150000 && salary <= 200000){
      taxRate = 0.2;
    }
    else{
      taxRate = 0.25;
    }
    return taxRate * salary;
  }

  // Setting the date of tax report
  const data = employees.map((employee)=>{
    return {
      employeeId : employee.employeeId,
      employeeName : employee.name,
      employeeSalary: employee.salary,
      employeePosition: employee.position,
      employeeTaxOnSalary: getTaxFromSalary(employee.salary),
      salaryAfterTax: employee.salary - getTaxFromSalary(employee.salary)
    }
  });

  // generating file name based on current time

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const hours = String(currentDate.getHours()).padStart(2, '0');
  const minutes = String(currentDate.getMinutes()).padStart(2, '0');

  const fileName = `Tax_Report_${year}${month}${day}_${hours}${minutes}`;


  const fetchResources = ()=>{
    // Fetching employee data table
      axios.get(`${ip}/employee`)
      .then((res)=>setEmployees(res.data.result))
      .catch((err)=>console.log(err)) 
  }

  const navigate = useNavigate();
  useEffect(() => {
    if (userEmail == ""){
      navigate("/auth/login")
    }       
  }, [])
  return (
    <>
      <div className="main">
        <div className="main-wrapper">
          <div className="page-content">
            <div className="page-header flex items-center justify-between">
              <div>
                <h6 className="page-title">
                  <b>Tax Calculation</b>
                </h6>
              </div>
              <button className="button reimbursement-button">
              <CSVLink data={data} headers={headers} filename={fileName}>Generate Tax</CSVLink>
              </button>
            </div>
            <div className="page-table">
              <TaxTable employees={employees} fetchResources={fetchResources}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
