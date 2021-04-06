const express= require ("express");
const bodyParser= require("body-parser");

const app=express();

var toDoList=["Buy","Sell","GooO!"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res)
{
var today = new Date();

    var options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day = today.toLocaleDateString("en-US",options);

    res.render("list",{kindOfDay:day, newToDo:toDoList});
});


app.post("/",function(req,res){

    var toDo= req.body.items;
        toDoList.push(toDo);
        res.redirect("/");
});


app.listen(3000,function(){
    console.log("The server is runnning on port 3000!");
});