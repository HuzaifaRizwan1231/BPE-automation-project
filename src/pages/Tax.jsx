import React, { useEffect } from 'react'
import TaxTable from '../components/TaxTable'
import { useNavigate } from 'react-router-dom';

export default function Tax(props) {
  
  const {userEmail}=props;
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
                <h6>
                  <b>Tax Calculation</b>
                </h6>
              </div>
              <button className="button reimbursement-button">
                Generate Tax
              </button>
            </div>
            <div className="page-table">
              <TaxTable/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
