const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');
const upload = require("express-fileupload")
const dotenv = require("dotenv");
const cors = require("cors");

const appointmentRoutes = require("./routes/adminRoutes/appointments")
const authRoutes = require("./routes/userRoutes/auth")
const bookingRoutes = require("./routes/userRoutes/booking")
const adminRoutes = require("./routes/adminRoutes/admin")

dotenv.config();

app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.json());
app.use(upload())

//user_routes
app.use("/api/admin",adminRoutes)
app.use("/api/auth" , authRoutes );
app.use("/api/user" , bookingRoutes );
app.use("/api/admin" , appointmentRoutes);


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