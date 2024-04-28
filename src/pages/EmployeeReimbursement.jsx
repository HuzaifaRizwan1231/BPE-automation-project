import React, { useEffect, useState } from 'react'
import NewReimbursement from '../components/NewReimbursement';
import EmployeeReimbursementTable from '../components/EmployeeReimbursementTable';

export default function EmployeeReimbursement(props) {
 
  const [showForm, setShowForm] = useState(false);
  const {ip, userId, userEmail} = props;
   
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
                        <EmployeeReimbursementTable userId={userId}  userEmail={userEmail} ip={ip}/>
                  </div>
                </div>
            </div>
        </div>
        <NewReimbursement showForm={showForm} setShowForm={setShowForm}/>
      </>
    )
}
