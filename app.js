//Constant Varable fro express server
const express = require("express");
const path = require('path');

//Port Number
const PORT=1313;

//Using express
var app= express();

// This will display images on nodeJs server
app.use(express.static("image"));

app.get("/static",(req, res) => {
  res.render("static");  
});

const publicDirectory = path.join(__dirname, "./assets");
app.use(express.static(publicDirectory));
//Get Jason Data format
app.use(express.json());


//Set Html Template
// app.engine('html', cons.swig)
app.set('views', __dirname + '/views');
app.set("view engine", "ejs");

//Router to diffeent pages render
app.use("/", require("./routes/pages"));


app.listen(PORT, () => {
    console.log("Node Server & website is running on port: " + PORT);
  });

