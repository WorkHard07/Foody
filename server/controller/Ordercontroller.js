import Order from "../models/orders.model.js";
import User from "../models/userdata.js";
import express from "express";
const accountSid = "AC08432c10d1e1f65d36a687fb35685790";
const authToken = "f1436ffe9996d1b4e75c1676ee428537";
import nodemailer from "nodemailer";

import twilio from "twilio";
const client = new twilio(accountSid, authToken);

const router = express.Router();
const Createorder = async (req, res) => {
  const menus = [];
  const orders = req.body.order.menus;
  orders.forEach((element) => {
    menus.push(element.id);
  });
  const order = new Order({
    menus: menus,
    resto: req.body.order.resto,
    user: req.body.order.orders_owner,
    total: req.body.order.total,
    userName: req.body.order.userName,
    phonenumber: req.body.order.phonenumber,
    deliveryAddress: req.body.order.deliveryAddress,
    phoneNumber: req.body.order.phoneNumber,
  });
  order.save((err, orders) => {
    if (err) {
      res.send({ erro: "error occured" });
    }
    send("fooduwegonnachange@gmail.com", "bediszitoun@gmail. ");
    return res.json(orders);
  });
};
router.delete("/:id", (req, res) => {
  Menu.findByIdAndDelete((err) => {
    res.json({ message: "deleted" });
  });
});
const constgetallbyresto = async (req, res) => {
  var allorders = [];
  var orders = await Order.find({ resto: req.params.id }).populate("menus");
  res.json(orders);
 
};
const deleteOrder = (req, res) => {
  Order.findByIdAndDelete(req.params.id, (err) => {
    client.messages
      .create({
        body: "Dear client , your order is ready #Foody",
        from: "+15139865548",
        to: "+21692071964",
      })
      .then((message) => {
        console.log("here");
        console.log(message.sid);
        res.json({ message: "deleted" });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

async function send(from, to) {
  console.log("called");
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    secure: false, 
    auth: {
      user: "63ffd0e8e0103a", 
      pass: "4c413a7ea954a2", 
    },
  });

  let info = await transporter.sendMail({
    from: from, 
    to: to,
    subject: "your order is on ower wanted list  ✔", 
    text: "Order recived succesfully", 
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
export default { Createorder, constgetallbyresto, deleteOrder };
