const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connection = mongoose.connect()
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

app.use(cors());
app.use(express.json());


mongoose
.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('mongodb connected')
    app.listen(process.env.PORT || 5000, () => {
        console.log("Node App running ")
    })
}).catch((err) => {
    console.log(err)
})