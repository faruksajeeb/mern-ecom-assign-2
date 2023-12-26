const express = require("express");
const app = new express();
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require("cors");
const path = require("path");

// Datatabse
const mongoose = require("mongoose");

// Routes
const router = require("./src/routes/api");

//Security
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
app.use(bodyParser.json());

// Rate Limiting
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 300 });
app.use(limiter);

// Database Connection
// let URI="mongodb+srv://<username>:<password>@cluster0.7uslu.mongodb.net/CRUD4";
// let OPTION={user:'',pass:'',autoIndex:true};
// mongoose.connect(URI,OPTION).then((res)=>{
//     console.log("Success")
// }).catch((err)=>{
//     console.log(err)
// })
let URI="mongodb+srv://<username>:<password>@cluster0.f0lznne.mongodb.net/mern-ecommerce";
let OPTION={user:'',pass:'',autoIndex:true};
mongoose.connect(URI,OPTION).then((res)=>{
    console.log("Database Connected!")
}).catch((err)=>{
    console.log(err)
})



// Backend Routing
app.use("/api", router);

// Front Routing
app.use(express.static('client/build'));
app.get('*',function(req,res){
    req.sendFile(path.resolve(__dirname,'client','build','index.html'));
});


app.use("*", (req, res) => {
  res.status(404).json({ status: "fail", data: "Not Found" });
});

module.exports = app;
