import React, { useEffect, useState } from 'react'
import TaxTable from '../components/TaxTable'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Tax(props) {
  
  const {userEmail, ip}=props;

  const [employees, setEmployees] = useState([])

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
                Generate Tax
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
