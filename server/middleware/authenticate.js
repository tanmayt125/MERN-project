const jwt=require("jsonwebtoken");
const User=require("../middleware/authenticate");
const Authenticate=async(req,res,next)=>{
    try {
        
    } catch (error) {
        res.statue(401).send('Unauthorized:No token provided');
        console.log(error);
    }
}