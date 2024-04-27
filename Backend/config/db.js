
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
    host: "mysql-108e726a-huzaifa-a95e.d.aivencloud.com",
    user: "avnadmin",
    password: "AVNS_jGXuSgbPuvpR5YAL9TQ",
    database: "BPE",
    debug    :  true,
    wait_timeout : 28800,
    connect_timeout :10,
    port:11134
})




module.exports = db;