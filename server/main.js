 import express from "express"

import usersRoutes from "./routes/users.js"
import  mongoose from "mongoose";
import  cors from "cors";
import  bcrypt from "bcrypt";
import  User from "./models/userdata.js";
// import Menu from "./routes/menu.routes.js"
const app = express();
const port = process.env.PORT|| 3000;

const usersRoutes = require("./routes/users.js");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const User = require("./models/userdata.js");
app.use('/api',require('./routes/menu.route')) // added
app.use(express.static("../client/public"));
app.use(express.json());
app.use(cors());
//----- connectin to mongodb---- //
mongoose.connect("mongodb+srv://Foody:foody07@cluster0.so7wi.mongodb.net/Foody?retryWrites=true&w=majority", {
  useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex :true
});
// mongoose.connect('mongodb+srv://hichem:1-hichemmarwa@cluster0.mkmvc.mongodb.net/<dbname>?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
// });
/////----------------------------------/////
app.use("/", usersRoutes)
// app.post("/signup", );
// app.post("/signup", );
//---------testing the server-----//
// app.get("/", (req, res) => {
//   res.send("index.html");
// });

app.listen(port, () => {
  console.log(port);
});
