const express= require ("express");
const bodyParser= require("body-parser");
const date = require(__dirname+"/date.js");

console.log(date);

const app=express();

var toDoList=[];
const toDoWorkList=[];
//it is actually possible to PUSH new items to an const array

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req,res)
{
    //let day = date.getDate(); - to get the whole Date
    const day = date.getDay();
    res.render("list",{kindOfDay:day, newToDo:toDoList});
});

app.post("/",function(req,res){

    const toDo= req.body.items;
    
    if (req.body.listing==="workList"){
        toDoWorkList.push(toDo);
        res.redirect("/work");
    } else{
        toDoList.push(toDo);
        res.redirect("/");
    }

});

app.get("/work",function(req,res)
{
    let bookmark="workList";
    res.render("list",{kindOfDay:bookmark,newToDo:toDoWorkList})
});


app.listen(3000,function(){
    console.log("The server is runnning on port 3000!");
});