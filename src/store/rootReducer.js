import { combineReducers } from "redux";
import CatsReducer from "../pages/cats/CatsReducer";

export default combineReducers({ cats: CatsReducer });
