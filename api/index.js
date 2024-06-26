const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const movieRoute = require('./routes/movies')
const listRoute = require('./routes/lists')

const app = express();
dotenv.config();

// connection database 
mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("DB Connection Successfull!") }).catch((err) =>{ console.log(err); })

app.use(express.json())
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/movies",movieRoute);
app.use("/api/lists",listRoute)

app.listen(8800, ()=>{
    console.log("Backend server is running!")
})
