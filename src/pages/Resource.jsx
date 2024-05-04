import React, { useEffect, useState } from "react";
import ResourceTable from "../components/ResourceTable";
import TransferResource from "../components/TransferResource";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Resource(props) {

  const [showForm, setShowForm] = useState(false);
  const {ip, userEmail} = props;


  const [eId, setEId] = useState()
  const [eName, setEName] = useState("");
  const [eProjectId, setEProjectId] = useState()
  const [projects, setProjects] = useState([])
  const [employees, setEmployees] = useState([])
  const [eProjectName, setEProjectName] = useState()

  const navigate = useNavigate();
  useEffect(() => {
    if (userEmail == ""){
      navigate("/auth/login")
    }       
  }, [])

  const fetchResources = ()=>{
    // Fetching employee data table
      axios.get(`${ip}/employee_projects`)
      .then((res)=>setEmployees(res.data.result))
      .catch((err)=>console.log(err)) 
  }


  const fetchProjects = (id)=>{
    axios.post(`${ip}/projects`, {exceptionId:id})
    .then((res)=>{console.log(res.data.result); setProjects(res.data.result)})
    .catch((err)=>console.log(err))
}

  return (
    <>
      <div className="main">
        <div className="main-wrapper">
          <div className="page-content">
            <div className="page-header flex items-center justify-between">
              <div>
                <h6 className="page-title">
                  <b>Resource Allocation</b>
                </h6>
              </div>
              {/* <button className="button reimbursement-button" onClick={()=>{
                    setShowForm(true);
                  }}>
                + Add Resource
              </button> */}
            </div>
            <div className="page-table">
              <ResourceTable ip={ip} setEProjectName={setEProjectName} setShowForm={setShowForm} setEId={setEId} setEName={setEName} setEProjectId={setEProjectId} fetchProjects={fetchProjects} fetchResources={fetchResources} employees={employees}/>
            </div>
          </div>
        </div>
      </div>

      <TransferResource fetchResources={fetchResources} eProjectName={eProjectName} projects={projects} eId={eId} eName={eName} eProjectId={eProjectId} showForm={showForm} setShowForm={setShowForm} ip={ip}/>
    </>
  );
}
