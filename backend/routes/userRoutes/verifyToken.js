const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next) => {
    const authHeader = req.headers.authorization;
    // console.log(authHeader)
    if(authHeader){
        const token = authHeader.split(" ")[1];
        // console.log(token)
        jwt.verify(token , process.env.JWT_SEC , (err,user) => {
            if(err){
                console.log(err);
                res.status(403).json("Token is not valid!");
            } 
            console.log(user)
            req.user = user;
            console.log('object')
            console.log(req.user)
            next();
        })
      

    }else{
        return res.status(401).json("You are not authenticated!")
    }
}

const verifyTokenAndAuth = (req , res ,next) => {
    verifyToken(req,res, ()=> {
        if(req.user.id === req.params.id){
            next();
        }else{
            res.status(403).json("You are not allowed")
        }
    })
}

module.exports = {
    verifyToken,
    verifyTokenAndAuth,
};