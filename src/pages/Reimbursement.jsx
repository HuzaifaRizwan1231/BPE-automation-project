import React, { useEffect, useState } from 'react'
import ReimbursementTable from '../components/ReimbursementTable'
import { useNavigate } from 'react-router-dom';
import ReimbursementDetail from '../components/ReimbursementDetail';
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

  const FetchReimbursementsForAdmin = ()=>{
        // Fetching reimbursements data table
        axios.get(`${ip}/reimbursements`)
        .then((res)=>{console.log(res.data.result); setReimbursements(res.data.result)})
        .catch((err)=>console.log(err))   
  }

  const approveReimbursement = (reimbursementId)=>{
    updateReimbursements(reimbursementId, "Approved")
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
                      <ReimbursementTable setReimbursementId={setReimbursementId} setReimbursementAmount={setReimbursementAmount} setReimbursementType={setReimbursementType} setEmployeeId={setEmployeeId} setImage={setImage} setDescription={setDescription} reimbursements={reimbursements} FetchReimbursementsForAdmin={FetchReimbursementsForAdmin} ip={ip} setShowForm={setShowForm}/>
                </div>
              </div>
          </div>
      </div>
      <ReimbursementDetail reimbursementId={reimbursementId} reimbursementAmount={reimbursementAmount} reimbursementType={reimbursementType} employeeId={employeeId} image={image} description={description} showForm={showForm} setShowForm={setShowForm} approveReimbursement={approveReimbursement} rejectReimbursement={rejectReimbursement}/>
    </>
  )
}
