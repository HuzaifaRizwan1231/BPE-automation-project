import React from 'react'
import AdditionForm from '../components/AddEmployee/AdditionForm'

export default function AddEmployee(props) {
    const {ip}= props;
  return (
    <div className="main">
          <div className="main-wrapper">
              <div className="page-content">
                <div className="page-header flex items-center justify-between">
                  <div>
                      <h6 className="page-title"><b>Add Employee</b></h6>
                  </div>
                  {/* <button className="button reimbursement-button" onClick={()=>{
                    setShowForm(true);
                  }}>+ Add Reimbursement</button> */}
                </div>
                <div className="page-table">
                      <AdditionForm ip={ip}/>

                </div>
              </div>
          </div>
      </div>
  )
}
