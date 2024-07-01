import React, { useEffect, useState } from 'react'
import ReimbursementTable from '../components/Reimbursement/ReimbursementTable'
import { useNavigate } from 'react-router-dom';
import ReimbursementDetail from '../components/Reimbursement/ReimbursementDetail';
import axios from 'axios';

export default function Reimbursement(props) {

  const [showForm, setShowForm] = useState(false);
  const {ip, userEmail} = props;

  const [reimbursements, setReimbursements] = useState([])

  const [reimbursementId, setReimbursementId] = useState()
  const [reimbursementAmount, setReimbursementAmount] = useState()
  const [reimbursementType, setReimbursementType] = useState()
  const [employeeId, setEmployeeId] = useState()
  const [description, setDescription] = useState()
  const [image, setImage] = useState()
  const [employeeName, setEmployeeName] = useState()
  const [remainingAmount, setRemainingAmount] = useState()

  const FetchReimbursementsForAdmin = ()=>{
        // Fetching reimbursements data table
        axios.get(`${ip}/reimbursements`)
        .then((res)=>{console.log(res.data.result); setReimbursements(res.data.result)})
        .catch((err)=>console.log(err))   
  }

  const approveReimbursement = (reimbursementId, userId, minusAmount)=>{
    updateReimbursements(reimbursementId, "Approved")

    // Update remaining amount of employee for reimbursement
    axios.post(`${ip}/update_employee_remaining_amount`, {userId, minusAmount})
    .then((res)=>{console.log(res.data);})
    .catch((err)=>console.log(err)) 
  }

  const rejectReimbursement = (reimbursementId)=>{
    updateReimbursements(reimbursementId, "Rejected")
  }

  const updateReimbursements = async (reimbursementId, status)=>{
    await axios.post(`${ip}/update_reimbursement`, {reimbursementId, status})
      .then((res)=>{console.log(res.data), FetchReimbursementsForAdmin()})
      .catch((err)=>console.log(err))   
      setShowForm(false)
  }

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("isLogin")!="true"){
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
                      <ReimbursementTable setRemainingAmount={setRemainingAmount}  setEmployeeName={setEmployeeName} setReimbursementId={setReimbursementId} setReimbursementAmount={setReimbursementAmount} setReimbursementType={setReimbursementType} setEmployeeId={setEmployeeId} setImage={setImage} setDescription={setDescription} reimbursements={reimbursements} FetchReimbursementsForAdmin={FetchReimbursementsForAdmin} ip={ip} setShowForm={setShowForm}/>
                </div>
              </div>
          </div>
      </div>
      <ReimbursementDetail remainingAmount={remainingAmount} employeeName={employeeName} reimbursementId={reimbursementId} reimbursementAmount={reimbursementAmount} reimbursementType={reimbursementType} employeeId={employeeId} image={image} description={description} showForm={showForm} setShowForm={setShowForm} approveReimbursement={approveReimbursement} rejectReimbursement={rejectReimbursement}/>
    </>
  )
}
