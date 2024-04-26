import React from 'react'
import TaxTable from '../components/TaxTable'

export default function Tax() {
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
