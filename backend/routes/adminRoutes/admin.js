const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { AdminModel } = require("../../models/AdminModel");
const { Admin } = require("mongodb");

router.post("/register", async (req, res) => {
  const {  name, email, password, department, role } = req.body;
  bcrypt.hash(password, 5, async function (err, hash) {
    // Store hash in your password DB.
    if (err) return res.send({ message: "Something went wrong", status: 0 });

    try {
      let user = new AdminModel({
        name,
        email,
        password: hash,
        department,
        role,
      });
      await user.save();
      res.send({
        message: "Master admin created",
        status: 1,
      });
    } catch (error) {
      res.send({
        message: error.message,
        status: 0,
      });
    }
  });
});

// try {

//   // const { id, name, email, password, department, role } = req.body;
function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}
router.post("/login", async (req, res) => {
  const { name, email, password, department, role } = req.body;

  // we can send a option of how much time this token will be valid
  // let option = {
  //   // it will create a loop of 3 min for accesing data-base, not in login and sign up time
  //   expiresIn: "3m",
  // };

  // cheak user is avilable or not
  try {
    let data = await AdminModel.find({ email });
    if (data.length > 0) {
      //creating token from data becuase jab user login ho jayega to data send krenga in the form of token
      let token = jwt.sign({ userId: data[0]._id }, "kartikey");
      
      // Load hash from your password DB.
      bcrypt.compare(password, data[0].password, function (err, result) {
        result == true;

        if (err)
          return res.send({
            message: "Something went wrong: " + err,
            status: 0,
          });

        if (result) {
          
//const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTdmY2M0MDMyYjc4ODYwZGNjZjBhY2UiLCJpYXQiOjE3MDI4NzYzMDl9.ohHOy4P3glJaTUfH9AIyQYqkov5i70HYzoxDm6wixrk";
          // const secretKey = "kartikey";

          // jwt.verify(token, secretKey, (err, decoded) => {
          //   console.log("bbbb")
          //   console.log(token)
          //   console.log("bbbb")

          //   if (err) {
          //     console.log("cccc")
          //     return res.status(401).json({ message: 'Invalid token' });
          //   }

          //   // Check if 'admins' property exists in decoded object

          //     // res.json({ user_id });
          //   if (decoded.admins && decoded.admins.id) {
          //     const user_id = decoded.admin.id;
          //     res.send({
          //       user_id
          //     })
          //   } else {
          //     console.log("kkkk")
          //     return res.status(401).json({ message: 'Invalid token structure' });
          //   }
          // });
          //           // if (role === "Admin") {

          // }
          // if (Role === Hod) {
          // }
          // if (Role === Doctor) {
          // }

          res.send({
            message: "Admin login Sucessfully",
            token: token,
            status: 1,
            
          });
        } else {
          res.send({
            message: "login Unsucessfull due to incorect password",
            status: 0,
          });
        }
      });
    }
    // when there is no user exist the this else condition will perform
    else {
      res.send({
        message: "No such master admin found",
        status: 0,
      });
    }
  } catch (error) {
    // this catch method is for when something is wrong in database
    res.send({
      message: error.message,
      status: 0,
    });
  }
});

// Delete admin API
router.delete("/del", async (req, res) => {
  const { id } = req.body;

  try {
    await AdminModel.deleteOne({ _id: id });
    res.send({
      message: "Delete of Master admin sucessfully",
      status: 1,
    });
  } catch (error) {
    console.log(error.message);
    res.send({
      message: "Delete unsucessfully",
      status: 0,
    });
  }
});

///////
///////////
////////////////

// for Hod

// log in for hod

router.post("/loginhod", async (req, res) => {
  const { name, email, password, department, role } = req.body;

  // we can send a option of how much time this token will be valid
  // let option = {
  //   // it will create a loop of 3 min for accesing data-base, not in login and sign up time
  //   expiresIn: "3m",
  // };

  // cheak user is avilable or not
  try {
    let data = await AdminModel.find({ email });
    if (data.length > 0) {
      //creating token from data becuase jab user login ho jayega to data send krenga in the form of token
      let token = jwt.sign({ userId: data[0]._id }, "kartikey");

      // Load hash from your password DB.
      bcrypt.compare(password, data[0].password, function (err, result) {
        result == true;
        if (err)
          return res.send({
            message: "Something went wrong: " + err,
            status: 0,
          });
        if (result) {
          res.send({
            message: "HOD login Sucessfully",
            token: token,
            status: 1,
          });
        } else {
          res.send({
            message: "login Unsucessfull due to incorect password",
            status: 0,
          });
        }
      });
    }
    // when there is no user exist the this else condition will perform
    else {
      res.send({
        message: "No such HOD found",
        status: 0,
      });
    }
  } catch (error) {
    // this catch method is for when something is wrong in database
    res.send({
      message: error.message,
      status: 0,
    });
  }
});

// Delete admin API
router.delete("/delhod", async (req, res) => {
  const { id } = req.body;

  try {
    await AdminModel.deleteOne({ _id: id });
    res.send({
      message: "Delete of HOD sucessfully",
      status: 1,
    });
  } catch (error) {
    console.log(error.message);
    res.send({
      message: "Delete unsucessfully",
      status: 0,
    });
  }
});

// /////////
//////////////
/////////////////

// for Hod

router.post("/registerdoc", async (req, res) => {
  const { id, name, email, password, department, role } = req.body;
  bcrypt.hash(password, 5, async function (err, hash) {
    // Store hash in your password DB.
    if (err) return res.send({ message: "Something went wrong", status: 0 });

    try {
      let user = new AdminModel({
        name,
        email,
        password: hash,
        department,
        role,
      });
      await user.save();
      res.send({
        message: "Doctor Created",
        status: 1,
      });
    } catch (error) {
      res.send({
        message: error.message,
        status: 0,
      });
    }
  });
});

// log in for hod

router.post("/logindoc", async (req, res) => {
  const { name, email, password, department, role } = req.body;

  // we can send a option of how much time this token will be valid
  // let option = {
  //   // it will create a loop of 3 min for accesing data-base, not in login and sign up time
  //   expiresIn: "3m",
  // };

  // cheak user is avilable or not
  try {
    let data = await AdminModel.find({ email });
    if (data.length > 0) {
      //creating token from data becuase jab user login ho jayega to data send krenga in the form of token
      let token = jwt.sign({ userId: data[0]._id }, "kartikey");

      // Load hash from your password DB.
      bcrypt.compare(password, data[0].password, function (err, result) {
        result == true;
        if (err)
          return res.send({
            message: "Something went wrong: " + err,
            status: 0,
          });
        if (result) {
          res.send({
            message: "Doctor login Sucessfully",
            token: token,
            status: 1,
          });
        } else {
          res.send({
            message: "login Unsucessfull due to incorect password",
            status: 0,
          });
        }
      });
    }
    // when there is no user exist the this else condition will perform
    else {
      res.send({
        message: "No such Doctor found",
        status: 0,
      });
    }
  } catch (error) {
    // this catch method is for when something is wrong in database
    res.send({
      message: error.message,
      status: 0,
    });
  }
});

// Delete admin API
router.delete("/deldoc", async (req, res) => {
  const { id } = req.body;

  try {
    await AdminModel.deleteOne({ _id: id });
    res.send({
      message: "Delete of Doctor sucessfully",
      status: 1,
    });
  } catch (error) {
    console.log(error.message);
    res.send({
      message: "Delete unsucessfully",
      status: 0,
    });
  }
});

module.exports = router;
