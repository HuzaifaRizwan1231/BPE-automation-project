//Initializing server
const express = require("express");
const db = require("./config/db.js");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = 3002;

app.use(cors());
app.use(express.json());
app.use(fileUpload());

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

// UPDATE EMPLOYEE REIMBURSEMENT AMOUNT
app.post("/update_employee_remaining_amount", (req, res) => {
  const userId = req.body.userId;
  const minusAmount = req.body.minusAmount;
  db.query(
    "UPDATE employee SET employee.reimbursementAmount = employee.reimbursementAmount - ? WHERE employee.employeeId = ?",
    [minusAmount, userId],
    (error, result) => {
      if (error) {
        return res.json(error);
      } else {
        return res.json({ result });
      }
    }
  );
});

// GET EMPLOYEE WITH PROJECTS
app.get("/employee_projects", (req, res) => {
  db.query(
    "SELECT * FROM employee JOIN Project ON employee.projectId = Project.projectId",
    (err, result) => {
      if (err) {
        return res.json(err);
      } else {
        console.log(result)
        return res.json({ result });
      }
    }
  );
});

// GET PENDING REIMBURSEMENTS ALONG WITH EMPLOYEE INFORMATION
app.get("/reimbursements", (req, res) => {
  db.query(
    "SELECT * FROM Reimbursement JOIN employee ON employee.employeeId = Reimbursement.employeeId WHERE status = 'Pending' ORDER BY amount desc",
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
  const userId = req.body.userId;
  db.query(
    "SELECT * FROM Reimbursement JOIN employee ON employee.employeeId = Reimbursement.employeeId WHERE employee.employeeId = ? ORDER BY status",
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
  const { amount, userId, status, type, description } = req.body;

  // If no file is uploaded
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }

  const file = req.files.file;

  // Define destination folder and new filename
  const destinationFolder = "../src/images/ReimbursementImages";

  //Renaming the file according to the current timestamp
  const originalFileName = file.name;
  const timeStamp = Date.now();
  const newFileName = `${timeStamp}_${originalFileName}`;

  //move the file to the specific folder
  file.mv(path.join(destinationFolder, newFileName), (err) => {
    if (err) {
      console.log("----------------------------------");
      console.log("not moved");
      console.log(err.message);

      return res.status(500).send(err);
    }

    //Inserting the file name into the database
    const insertQuery =
      "INSERT INTO Reimbursement (image, amount, employeeId, status, type, description) VALUES (?, ?, ?, ?, ?, ?)";

    db.query(
      insertQuery,
      [newFileName, amount, userId, status, type, description],
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
  if (exceptionId == null) {
    exceptionId = "NULL";
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

  let sql;
  // Query to update project ID of an employee
  if (transferToId == "NULL") {
    sql = "UPDATE employee SET projectId = NULL WHERE employeeId = ?";
    // Execute query
    db.query(sql, [eId], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: "Project ID updated successfully" });
      }
    });
  } else {
    sql = "UPDATE employee SET projectId = ? WHERE employeeId = ?";
    // Execute query
    db.query(sql, [transferToId, eId], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: "Project ID updated successfully" });
      }
    });
  }
});

//Listening

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
