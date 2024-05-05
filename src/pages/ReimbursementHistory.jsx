import React, { useEffect, useState } from 'react'
import ReimbursementTable from '../components/Reimbursement/ReimbursementTable'
import { useNavigate } from 'react-router-dom';
import ReimbursementDetail from '../components/Reimbursement/ReimbursementDetail';
import axios from 'axios';
import HistoryTable from '../components/ReimbursementHistory/HistoryTable';
import HistoryDetail from '../components/ReimbursementHistory/HistoryDetail';

export default function ReimbursementHistory(props) {
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
  const [reimbursementStatus, setReimbursementStatus] = useState()
  const [remainingAmount, setRemainingAmount] = useState()

  const FetchReimbursementsForAdmin = ()=>{
        // Fetching reimbursements data table
        axios.get(`${ip}/reimbursements_history`)
        .then((res)=>{console.log(res.data.result); setReimbursements(res.data.result)})
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
                      <h6 className="page-title"><b>Reimbursement History</b></h6>
                  </div>
                  {/* <button className="button reimbursement-button" onClick={()=>{
                    setShowForm(true);
                  }}>+ Add Reimbursement</button> */}
                </div>
                <div className="page-table">
                      <HistoryTable setReimbursementStatus={setReimbursementStatus} setRemainingAmount={setRemainingAmount}  setEmployeeName={setEmployeeName} setReimbursementId={setReimbursementId} setReimbursementAmount={setReimbursementAmount} setReimbursementType={setReimbursementType} setEmployeeId={setEmployeeId} setImage={setImage} setDescription={setDescription} reimbursements={reimbursements} FetchReimbursementsForAdmin={FetchReimbursementsForAdmin} ip={ip} setShowForm={setShowForm}/>
                </div>
              </div>
          </div>
      </div>
      <HistoryDetail reimbursementStatus={reimbursementStatus} remainingAmount={remainingAmount} employeeName={employeeName} reimbursementId={reimbursementId} reimbursementAmount={reimbursementAmount} reimbursementType={reimbursementType} employeeId={employeeId} image={image} description={description} showForm={showForm} setShowForm={setShowForm} />
   </>
  )
}
