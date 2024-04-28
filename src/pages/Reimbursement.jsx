import React, { useEffect, useState } from 'react'
import ReimbursementTable from '../components/ReimbursementTable'
import NewReimbursement from '../components/NewReimbursement'
import { useNavigate } from 'react-router-dom';

export default function Reimbursement(props) {

  const [showForm, setShowForm] = useState(false);
  const {ip, userEmail} = props;

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
                      <h6 className="page-title"><b>Reimbursement Management</b></h6>
                  </div>
                  {/* <button className="button reimbursement-button" onClick={()=>{
                    setShowForm(true);
                  }}>+ Add Reimbursement</button> */}
                </div>
                <div className="page-table">
                      <ReimbursementTable ip={ip}/>
                </div>
              </div>
          </div>
      </div>
      {/* <NewReimbursement showForm={showForm} setShowForm={setShowForm}/> */}
    </>
  )
}
