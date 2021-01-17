const express = require("express");
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
mongoose.connect('mongodb+srv://hichem:1-hichemmarwa@cluster0.mkmvc.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
});
/////----------------------------------/////
app.post("/signin", (req, res) => {
  try {
    console.log("here", req.body);
    var Usermail = req.body.Usermail;
    var Username = req.body.Username;
    const salt = bcrypt.genSaltSync(10);
    var Password = bcrypt.hashSync(req.body.Password, salt);
    console.log("Password", Password);
    User.create({
      Usermail: Usermail,
      Username: Username,
      Password: Password,
    });
    res.send("done");
  } catch (error) {
    console.log(error);
    res.Send(error);
  }
});
//---------testing the server-----//
// app.get("/", (req, res) => {
//   res.send("index.html");
// });

app.listen(port, () => {
  console.log(port);
});
