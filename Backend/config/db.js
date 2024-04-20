
const mysql = require('mysql')

//Defining db environment variables


//For deployment purpose

// const db = mysql.createPool({
//     waitForConnections : true,
//     queueLimit :0,
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     debug    :  true,
//     wait_timeout : 28800,
//     connect_timeout :10
// })


//temporary for localhost
const db = mysql.createPool({
    waitForConnections : true,
    queueLimit :0,
    host: "bdhhrxgqs6qmslfvvzxi-mysql.services.clever-cloud.com",
    user: "ulidp2iek6ljjfif",
    password: "uenHzc9R7wLrNe9S4inA",
    database: "bdhhrxgqs6qmslfvvzxi",
    debug    :  true,
    wait_timeout : 28800,
    connect_timeout :10
})




module.exports = db;