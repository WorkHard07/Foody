import express from "express";
import Order from "../models/orders.model.js";
import Ordercontroller from "../controller/Ordercontroller.js";
var router = express.Router();

router.route("/").post(Ordercontroller.Createorder);

export default router;
