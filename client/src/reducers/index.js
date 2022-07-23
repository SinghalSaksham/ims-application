import { combineReducers } from "redux";
import users from "./users";
import products from "./products";
import categorys from "./categorys";

export default combineReducers({
  users,
  products,
  categorys,
});
