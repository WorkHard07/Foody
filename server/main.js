const express = require("express");
const app = express();
const port = 3000;
const usersRoutes = require("./routes/users.js");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/userdata.js");
app.use(express.static("../client/public"));
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/foody", {
  useNewUrlParser: true,
});
app.post("/signin", (req, res) => {
  try {
    console.log(req.body);
    //var Id=req.body.Id;
    var Usermail = req.body.Usermail;
    var Username = req.body.Username;
    var Password = req.body.Password;
    // var Role=req.body.Role;
    User.create({
      // create user
      // Id :Id,
      Usermail: Usermail,
      Username: Username,
      Password: Password,
      // Role:Role
    });
    res.send("done");
  } catch (error) {
    res.Send(error);
  }
});
app.get("/", (req, res) => {
  res.send("index.html");
});

app.listen(port, () => {
  console.log(port);
});
