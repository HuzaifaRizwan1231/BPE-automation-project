import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reimbursement from './pages/Reimbursement';
import Resource from './pages/Resource';
import Tax from './pages/Tax';
import Login from './pages/Login';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>

        <Route
            path="/auth/login"
            element={<Login/>}
        />

        <Route
            path="/hr/reimbursement"
            element={<Reimbursement/>}
        />

        <Route
            path="/hr/resource"
            element={<Resource/>}
        />

        <Route
            path="/finance/tax"
            element={<Tax/>}
        />
        </Routes>

      </Router>


    </>
  )
}

export default App
