import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EmployeeReimbursementTable from '../components/EmployeeReimbursement/EmployeeReimbursementTable';
import NewReimbursement from '../components/EmployeeReimbursement/NewReimbursement';

export default function EmployeeReimbursement(props) {
 
  const [showForm, setShowForm] = useState(false);
  const {ip, userId, userEmail} = props;
  const navigate = useNavigate();

  const [reimbursements, setReimbursements] = useState([])
    
    const FetchReimbursements = ()=>{
        // Fetching reimbursements data table
        axios.post(`${ip}/employee_reimbursements`, {userId:userId})
        .then((res)=>{setReimbursements(res.data.result), console.log(res.data)})
        .catch((err)=>console.log(err))  
    }

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
                        <h6 className="page-title"><b>Your Reimbursements</b></h6>
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
