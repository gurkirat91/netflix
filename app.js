const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");

const app=express()
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');


app.get("/",function(req,res){
  res.render("home");
})
app.get("/signin",function(req,res){
  res.render("signin");
})

app.get("/main", (req,res)=>{
})










app.listen(5000,function(){
  console.log("starting the server");
})
 