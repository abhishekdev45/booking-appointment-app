const router = require("express").Router();
const User = require("../../models/user");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
        ).toString(),
        address: req.body.address
    });
    
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);

  }catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        });

        if (!user) {
            return res.status(401).json("Wrong Email");
        }

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );

        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
        const inputPassword = req.body.password;

        console.log(originalPassword)
        console.log(inputPassword)

        if (originalPassword !== inputPassword) {
            return res.status(401).json("Wrong Password");
        }

        const accessToken = jwt.sign(
            {
                id: user._id,
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );


        const { password, ...others } = user._doc;
        return res.status(200).json({ ...others, accessToken });

    } catch (err) {
        return res.status(500).json(err);
    }
});


module.exports = router;