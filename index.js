

// importng module of express
const express = require("express")

const connectToMongo = require("./config/db")

// app config
const app = express();

// connecting  to monogoDb
connectToMongo()

// express middleware
app.use(express.json())

//PORT
const port = 9091

// routes
app.use('/api/hit',require('./routes/employeeroutes'))

// lsitner
app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})

