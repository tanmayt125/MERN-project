// sever in node and express

const { create } = require("domain");
const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
require("./db/conn");
const Register = require("./models/register");
const Information=require("./models/information");
const Message=require("./models/message");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine", "hbs");

app.get('/',(req,res)=>{
    res.render("index");
})
app.get('/register',(req,res)=>{
    res.render("newregister");
})
app.get('/login',(req,res)=>{
    res.render("newlogin");
})
// pm :- personal message
app.get('/pm',(req,res)=>{
    res.render("pm");
})
// dm :- drop message(drop your message to the developer)
app.get('/dm',(req,res)=>{
    res.render("Drop-message");
})

app.get('/notification',(req,res)=>{   
    const getDocument=async()=>{
        const result = await Register.find();
        res.send({result})
        console.log(result);}
    getDocument(); 
})
app.get('/message',(req,res)=>{
    res.render("message");
})
app.get("/about",async(req,res)=>{
    const getDocument=async()=>{
        const result = await Message.find();
        console.log("Data sent to server");
        res.json(result);
        }
        getDocument(); 
    
})
// create a new user in our database
app.post("/register",async(req,res)=>{
    const {firstname,lastname}=req.body;
    try{
       console.log(req.body.name);
       console.log(req.body.password);
       const registerEmployee= new Register({firstname:req.body.name,lastname:req.body.password});
       const registered=await registerEmployee.save();
       res.status(201).json({message:"user regestered successfully"});

    }catch(error){
        res.status(400).send(error);
    }
})
app.post("/notice",async(req,res)=>{
    const {firstname,lastname}=req.body;
    try{
       console.log(req.body.name);
       console.log(req.body.password);
       const registerEmployee= new Message({firstname:req.body.name,lastname:req.body.password});
       const registered=await registerEmployee.save();
       res.status(201).json({message:"message send successfully"});

    }catch(error){
        res.status(400).send(error);
    }
})
app.post("/registerinfo",async(req,res)=>{
    try{
       console.log(req.body.n1);
       console.log(req.body.n2);
       const registerEmployee= new Information({
           username:req.body.m1,
           mobile:req.body.n1,
           email:req.body.n2,
           address:req.body.n3,
           favname:req.body.n4,
       })
            const informed=await registerEmployee.save();
            res.status(201).render("login2.hbs");

    }catch(error){
        res.status(400).send(error);
    }
})
// login check

app.post("/login",async(req,res)=>{
    try {
        const firstname=req.body.name;
        const pass=req.body.password;

        const username = await Register.findOne({firstname:firstname});

        if(username.lastname == pass){
            res.status(201).json({message:"user login successfully"});
        }
        else{
            res.status(422).json({message:"invalid"});
        }
        console.log(firstname);
        console.log(" and password is ");
        console.log(pass);
    } catch (error) {
        res.status(422).json({message:"invalid"});
    }
})
app.post("/pm",async(req,res)=>{
    try {
        const firstname=req.body.n1;

        const username = await Register.findOne({firstname:firstname});
        if(username.firstname == firstname){
            res.status(201).send("message send successfully");
        }
    } catch (error) {
        res.status(400).send("no such user exist");
    }
})

app.listen(5000,(req,res)=>{
    const getDocument=async()=>{
        const result = await Register.find();
        console.log(result);
        }
        getDocument(); 
    console.log("Server is running at port no 5000");
})