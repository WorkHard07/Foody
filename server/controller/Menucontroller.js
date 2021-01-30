import Menu from "../models/menu.model.js";

const getmenubyid =  (id) => {
  var menu = Menu.findById(id).exec();
  return menu;
};

export default getmenubyid;
