import React, { useEffect, useState } from 'react'
import NewReimbursement from '../components/NewReimbursement';
import EmployeeReimbursementTable from '../components/EmployeeReimbursementTable';
import axios from 'axios';

export default function EmployeeReimbursement(props) {
 
  const [showForm, setShowForm] = useState(false);
  const {ip, userId, userEmail} = props;
   
  const [reimbursements, setReimbursements] = useState([])
    
    const FetchReimbursements = ()=>{
        // Fetching reimbursements data table
        axios.post(`${ip}/employee_reimbursements`, {userId:userId})
        .then((res)=>{setReimbursements(res.data.result), console.log(res.data)})
        .catch((err)=>console.log(err))  
    }

    return (
     
      <>
        <div className="main">
            <div className="main-wrapper">
                <div className="page-content">
                  <div className="page-header flex items-center justify-between">
                    <div>
                        <h6><b>Reimbursement History</b></h6>
                    </div>
                    <button className="button reimbursement-button" onClick={()=>{
                      setShowForm(true);
                    }}>+ Raise Reimbursement</button>
                  </div>
                  <div className="page-table">
                        <EmployeeReimbursementTable FetchReimbursements={FetchReimbursements} reimbursements={reimbursements} userId={userId}  userEmail={userEmail} ip={ip}/>
                  </div>
                </div>
            </div>
        </div>
        <NewReimbursement showForm={showForm} setShowForm={setShowForm} ip={ip} userId={userId} FetchReimbursements={FetchReimbursements}/>
      </>
    )
}
