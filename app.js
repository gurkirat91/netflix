const express=require("express");
const bodyParser=require("body-parser");
const ejs=require("ejs");
const mongoose=require("mongoose");
const session=require("express-session");
const passport=require("passport");
const passportLocalMongoose=require("passport-local-mongoose");


const app=express()
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');

app.use(session({                  //using session
  secret:"our little secret",      //key for hash ans salt.....
  resave:false,
  saveUninitialized:false
}));

app.use(passport.initialize());     //initialize the passport
app.use(passport.session());       //using passoprt to use session

mongoose.connect("mongodb://localhost:27017/Netflix");

const userSchema=new mongoose.Schema({
  username:String,
  password:String
});

userSchema.plugin(passportLocalMongoose);       //for hash ans salt...

const User=new mongoose.model("User",userSchema);

passport.use(User.createStrategy());                   //
passport.serializeUser(User.serializeUser());         //
passport.deserializeUser(User.deserializeUser());    //



let email="";   // initial the email...........




app.get("/",function(req,res){
  res.render("home");
})

app.get("/movies",function(req,res){
  if(req.isAuthenticated()){
    res.render("mov");
  }else{
    res.redirect("/signin");
  }
})


app.get("/signin",function(req,res){
  res.render("signin");
})
app.post("/signin",function(req,res){
  console.log(req.body);


  const user=new User({
    username:req.body.username,
    password:req.body.password
  });
  req.login(user,function(err){
    if(err){
      console.log(err);
    }
    else{
      passport.authenticate("local")(req,res,function(){
        res.redirect("/movies");
      })
    }
  })
})
app.get("/main", (req,res)=>{

})



app.get("/register",(req,res)=>{
  res.render("reg",{email:email});   //define the value of email input.....
})
app.post("/register",function(req,res){
  console.log(req.body);
  User.register({username:req.body.username},req.body.password,function(err,user){
    if(err){
      console.log(err);
      res.redirect("/");
    }else{
      passport.authenticate("local")(req,res,function(){
        res.redirect("/movies");
      })
    }
  })
})
app.post("/",function(req,res){
  console.log(req.body);
  email=req.body.email;     //getting the value of email from home page and sending it to register for passsword
  res.redirect("register");
})









app.listen(3000,function(){
  console.log("starting the server");
})
