import React from "react";
import ResourceTable from "../components/ResourceTable";

export default function Resource(props) {

  const {ip} = props;
  return (
    <>
      <div className="main">
        <div className="main-wrapper">
          <div className="page-content">
            <div className="page-header flex items-center justify-between">
              <div>
                <h6>
                  <b>Resource Allocation</b>
                </h6>
              </div>
              <button className="button reimbursement-button">
                + Add Resource
              </button>
            </div>
            <div className="page-table">
              <ResourceTable ip={ip}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
