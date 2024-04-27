import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reimbursement from './pages/Reimbursement';
import Resource from './pages/Resource';
import Tax from './pages/Tax';
import Login from './pages/Login';
import EmployeeReimbursement from './pages/EmployeeReimbursement';

function App() {
  const ip = "http://localhost:3002";

  const [isLogin, setIsLogin] = useState(false);
  const [isAdminLogin, setIsAdminLogin] = useState(false);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Router>
        <Navbar userName={userName} isLogin={isLogin} isAdminLogin={isAdminLogin}/>
        <Routes>

        <Route
            path="/auth/login"
            element={<Login ip={ip} userName={userName} userEmail={userEmail} setPassword={setPassword} password={password} setUserEmail={setUserEmail} setUserName={setUserName} setIsAdminLogin={setIsAdminLogin} setIsLogin={setIsLogin}/>}
        />
        

        <Route
            path="/hr/reimbursement"
            element={<Reimbursement ip={ip}/>}
        />

        <Route
            path="/employee/reimbursement"
            element={<EmployeeReimbursement ip={ip}/>}
        />

        <Route
            path="/hr/resource"
            element={<Resource ip={ip}/>}
        />

        <Route
            path="/finance/tax"
            element={<Tax ip={ip}/>}
        />
        </Routes>

      </Router>


    </>
  )
}

export default App
