import express from "express";
import menuRoutes from "./routes/menu.routes.js";
import usersRoutes from "./routes/users.js";
import Resto from "./routes/resto.route.js";
import order from "./routes/orders.routes.js";

import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import User from "./models/userdata.js";
// import Menu from "./routes/menu.routes.js"
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("../client/public"));
app.use(express.json());
app.use(cors());
//----- connectin to mongodb---- //
mongoose.connect(
  "mongodb+srv://Foody:foody07@cluster0.so7wi.mongodb.net/Foody?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);
// mongoose.connect('mongodb+srv://hichem:1-hichemmarwa@cluster0.mkmvc.mongodb.net/<dbname>?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
// });
/////----------------------------------/////
app.use("/", usersRoutes);
app.use("/api", menuRoutes);
app.use("/api/resto", Resto);
app.use("/api/orders", order); // added

// app.post("/signup", );
// app.post("/signup", );
//---------testing the server-----//
// app.get("/", (req, res) => {
//   res.send("index.html");
// });

app.listen(port, () => {
  console.log(port);
});
