const express = require("express")
const cors = require("cors")

global.app = express
global.app = require("node-cron")

global.app = require("knex")({
    client : mysql,
    connection : {
        host : "localhost",
        user : "root",
        password : "",
        database : "coffeeshop"
    }
})

app.use(cors())
app.use(express())


app.listen(3001)