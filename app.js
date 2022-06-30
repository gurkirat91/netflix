const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");

const app=express()
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');

let email="";   // initial the email.......




// app.get("/",function(req,res){
//   res.render("home");
// })
app.get("/signin",function(req,res){
  res.render("signin");
})
app.get("/register",(req,res)=>{
  res.render("register",{email:email});
})
app.post("/",function(req,res){
  console.log(req.body);
  email=req.body.email;     //getting the value of email from home page and sending it to register for passsword
  res.redirect("register");
})










app.listen(3000,function(){
  console.log("starting the server");
})
