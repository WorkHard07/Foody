import Order from "../models/orders.model.js";

const Createorder = async (req, res) => {
  const order = new Order({
    menus: req.body.menus,
    resto: req.body.resto,
    user: req.body.orders_owner,
  });
  order.save(() => {
    res.json(order);
    console.log("done");
  });
};

export default { Createorder };
