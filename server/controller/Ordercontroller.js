import Order from "../models/orders.model.js";

const Createorder = async (req, res) => {
  const menus = [];
  const orders = req.body.order.menus;
  orders.forEach((element) => {
    menus.push(element.id);
  });
  console.log(menus);

  const order = new Order({
    menus: menus,
    resto: req.body.order.resto,
    user: req.body.order.orders_owner,
    total: req.body.order.total,
  });
  console.log(order);
  order.save((err, orders) => {
    if (err) {
      console.log(err);
      res.send({ erro: "error occured" });
    }
    return res.json(orders);
  });
};

const constgetallbyresto = async (req, res) => {
  Order.find({ resto: req.params.id }, (err, orders) => {
    console.log(req.params.id);
    return res.json(orders);
  });
};
export default { Createorder, constgetallbyresto };
