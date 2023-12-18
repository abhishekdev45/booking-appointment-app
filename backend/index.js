const express = require("express");
const { router } = require("./routes/adminRoutes/admin");
const dbConnect = require("./db");
require("dotenv").config()
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use("/admin",router)



app.get("/", (req, res) => {
    res.send({
        message:"api is working"
    })
  });



app.listen(port, async () => {
    try {
      await dbConnect();
      console.log("database is connected");
    } catch (error) {
      console.log(error);
    }
  
    console.log("Server is running on port number", port);
  });




