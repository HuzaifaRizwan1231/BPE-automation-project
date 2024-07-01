import { useEffect, useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reimbursement from './pages/Reimbursement';
import Resource from './pages/Resource';
import Tax from './pages/Tax';
import Login from './pages/Login';
import EmployeeReimbursement from './pages/EmployeeReimbursement';
import AddEmployee from './pages/AddEmployee';
import ReimbursementHistory from './pages/ReimbursementHistory';

function App() {
  const ip = "http://localhost:3002";

  const [isLogin, setIsLogin] = useState(false);
  const [isAdminLogin, setIsAdminLogin] = useState(false);

  const [userId, setUserId] = useState();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("isLogin") === "true") {
      setUserId(localStorage.getItem("userId"));
      setUserName(localStorage.getItem("userName"));
      setUserEmail(localStorage.getItem("userEmail"));
      setPassword(localStorage.getItem("password"));
      setIsLogin(true);
    }

    if (localStorage.getItem("isAdminLogin") === "true") {
      setUserName(localStorage.getItem("userName"));
      setUserEmail(localStorage.getItem("userEmail"));
      setPassword(localStorage.getItem("password"));
      setIsAdminLogin(true);
    }
  
   
  }, [])
  


  return (
    <>
      <Router>
        <Navbar userName={userName} isLogin={isLogin} isAdminLogin={isAdminLogin}/>
        <Routes>

        <Route
            path="/"
            element={<EmployeeReimbursement ip={ip} userId={userId} userEmail={userEmail}/>}
        />

        <Route
            path="/auth/login"
            element={<Login ip={ip} userId={userId} userName={userName} userEmail={userEmail} setPassword={setPassword} password={password} setUserEmail={setUserEmail} setUserName={setUserName} setIsAdminLogin={setIsAdminLogin} setIsLogin={setIsLogin} setUserId={setUserId}/>}
        />
        

        <Route
            path="/hr/reimbursement"
            element={<Reimbursement ip={ip} userEmail={userEmail}/>}
        />

        <Route
            path="/hr/reimbursement_history"
            element={<ReimbursementHistory ip={ip} userEmail={userEmail}/>}
        />

        <Route
            path="/hr/add_employee"
            element={<AddEmployee ip={ip} userEmail={userEmail}/>}
        />

        <Route
            path="/employee/reimbursement"
            element={<EmployeeReimbursement ip={ip} userId={userId} userEmail={userEmail}/>}
        />

        <Route
            path="/hr/resource"
            element={<Resource ip={ip} userEmail={userEmail}/>}
        />

        <Route
            path="/finance/tax"
            element={<Tax ip={ip} userEmail={userEmail}/>}
        />
        </Routes>

      </Router>


    </>
  )
}

export default App
