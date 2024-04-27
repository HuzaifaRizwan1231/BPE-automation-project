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

   

    
      db.query("SELECT * FROM employee WHERE userName = ? AND password = ?", [userEmail,password], (err,result)=>{
          numOfRows = result.length;
          console.log(numOfRows)
          if(err) {
              return (res.json("Error")) ;
          } 
          else if(numOfRows==1){
              res.json({data : result});
          }
          else {
             return res.json("Incorrect Email or Password")
          }
      }
      )  
    
  
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

// RAISE NEW REIMBURSEMENT APPLICATION
app.post("/insert_reimbursement", (req, res) => {
  const { reimbursementNo, amount, empId, status } = req.body;
  const insertQuery =
    "INSERT INTO reimbursement (reimbursementNo, amount, empId, status) VALUES (?, ?, ?, ?)";

  db.query(
    insertQuery,
    [reimbursementNo, amount, empId, status],
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
app.post("/reimbursement/update", (req, res) => {
  const reimbursementID = req.body.reimbursementNo;
  const status = req.body.status;

  db.query(
    "UPDATE reimbursement SET status = ? WHERE reimbursementNo = ? ",
    [status, reimbursementID],
    (err, result) => {
      if (err) {
        return res.json("Error");
      } else {
        res.json({ message: "REIMBURSEMENT updated successfully" });
      }
    }
  );
});

// UPDATE PROJECT OF EMPLOYEE
app.put("/update_project", (req, res) => {
  const empId = req.body.empId;
  const projectId = req.body.projectId; // Assuming the project ID is provided in the request body

  // Query to update project ID of an employee
  const sql = "UPDATE employee SET projectId = ? WHERE empId = ?";

  // Execute query
  db.query(sql, [projectId, empId], (err, result) => {
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
