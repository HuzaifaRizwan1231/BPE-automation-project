import React from 'react'
import ReimbursementTable from '../components/ReimbursementTable'

export default function Reimbursement() {
  return (
    <div className="main">
        <div className="main-wrapper">
            <div className="page-content">
               <div className="page-header flex items-center justify-between">
                <div>
                    <h6><b>Reimbursement Management</b></h6>
                </div>
                <button className="button reimbursement-button">+ Add Reimbursement</button>
               </div>
               <div className="page-table">
                    <ReimbursementTable/>
               </div>
            </div>
        </div>
    </div>
  )
}
