//------------------ SingUp process ---------------------//
import express from "express";
import Usercontroller from "../controller/Usercontroller.js";
import User from "../models/userdata.js";
var router = express.Router();
router.route("/signin").post(Usercontroller.create);
router.route("/signup").post(Usercontroller.signup);
router.route("/filterByToken").post(Usercontroller.filterByToken)
router.get("/api/user/:id", async (req, res) => {
  console.log(req.params.id);
  var user = await User.findById(req.params.id).exec();

  res.json(user.Username);
});


export default router;
