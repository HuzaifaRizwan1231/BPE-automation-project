//Initializing server

const express = require('express');
const db = require('./config/db.js');
const cors = require('cors');

const app = express();

const PORT = 3002;

app.use(cors());
app.use(express.json());


//Queries

//Test api
app.get('/test', (req,res)=> {

    db.query("SELECT * FROM test", (err,result)=>{
        if(err) {
            return (res.json(err)) ;
        } 
        else {
           return res.json({data : result});
        }
    }
    )    
    
    })



//Listening

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})