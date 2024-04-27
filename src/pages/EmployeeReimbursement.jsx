import React, { useState } from 'react'
import ReimbursementTable from '../components/ReimbursementTable';
import NewReimbursement from '../components/NewReimbursement';

export default function EmployeeReimbursement(props) {
    const [showForm, setShowForm] = useState(false);
    const {ip} = props;
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
                        <ReimbursementTable ip={ip}/>
                  </div>
                </div>
            </div>
        </div>
        <NewReimbursement showForm={showForm} setShowForm={setShowForm}/>
      </>
    )
}
