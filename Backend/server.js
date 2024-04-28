//Initializing server

const express = require("express");
const db = require("./config/db.js");
const cors = require("cors");

const app = express();

const PORT = 3002;

app.use(cors());
app.use(express.json());

//Queries

//LOGIN
app.post("/login", (req, res) => {
  const userEmail = req.body.userEmail;
  const password = req.body.password;
  let numOfRows;
  db.query(
    "SELECT * FROM employee WHERE userEmail = ? AND password = ?",
    [userEmail, password],
    (err, result) => {
      numOfRows = result.length;
      console.log(numOfRows);
      if (err) {
        return res.json("Error");
      } else if (numOfRows == 1) {
        res.json({ data: result });
      } else {
        return res.json("Incorrect Email or Password");
      }
    }
  );
});

//GET EMPLOYEE DATA
app.get("/employee", (req, res) => {
  db.query("SELECT * FROM employee", (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json({ result });
    }
  });
});

// GET PENDING REIMBURSEMENTS
app.get("/reimbursements", (req, res) => {
  db.query(
    "SELECT * FROM Reimbursement WHERE status = 'Pending' ORDER BY amount desc",
    (error, result) => {
      if (error) {
        return res.json(error);
      } else {
        return res.json({ result });
      }
    }
  );
});

// GET EMPLOYEE REIMBURSEMENTS
app.post("/employee_reimbursements", (req, res) => {
  const  userId = req.body.userId;
  db.query(
    "SELECT * FROM Reimbursement WHERE employeeId = ? ORDER BY status",
    [userId],
    (error, result) => {
      if (error) {
        return res.json(error);
      } else {
        return res.json({ result });
      }
    }
  );
});

// RAISE NEW REIMBURSEMENT APPLICATION
app.post("/insert_reimbursement", (req, res) => {
  const { image, amount, userId, status, type, description } = req.body;
  const insertQuery =
    "INSERT INTO Reimbursement (image, amount, employeeId, status, type, description) VALUES (?, ?, ?, ?, ?, ?)";

  db.query(
    insertQuery,
    [image, amount, userId, status, type, description],
    (err, result) => {
      if (err) {
        console.error("Error inserting reimbursement:", err);
        res.status(500).json({ error: "Failed to insert reimbursement" });
      } else {
        console.log("Reimbursement inserted successfully");
        res.json({ message: "Reimbursement inserted successfully" });
      }
    }
  );
});

// UPDATE REIMBURSEMENT STATUS
app.post("/update_reimbursement", (req, res) => {
  const reimbursementId = req.body.reimbursementId;
  const status = req.body.status;

  db.query(
    "UPDATE Reimbursement SET status = ? WHERE reimbursementId = ? ",
    [status, reimbursementId],
    (err, result) => {
      if (err) {
        return res.json("Error");
      } else {
        console.log("Reimbursement updated successfully");
        res.json({ message: "REIMBURSEMENT updated successfully" });
      }
    }
  );
});

// GET PROJECTS TO TRANSFER TO
app.post("/projects", (req, res) => {
  let exceptionId = req.body.exceptionId;
  if(exceptionId==null){
    exceptionId = "NULL"
  }
  db.query(
    "SELECT * FROM Project WHERE projectId != ?",
    [exceptionId],
    (error, result) => {
      if (error) {
        return res.json(error);
      } else {
        return res.json({ result });
      }
    }
  );
});

// UPDATE PROJECT OF EMPLOYEE
app.put("/update_project", (req, res) => {
  const eId = req.body.eId;
  const transferToId = req.body.transferToId; // Assuming the project ID is provided in the request body

  // Query to update project ID of an employee
  const sql = "UPDATE employee SET projectId = ? WHERE employeeId = ?";

  // Execute query
  db.query(sql, [transferToId, eId], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ message: "Project ID updated successfully" });
    }
  });
});

//Listening

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
