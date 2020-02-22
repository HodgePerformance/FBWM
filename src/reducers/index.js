import { combineReducers } from "redux";
import CurrentSetReducer from "./current-set-reducer";

const reducers = combineReducers({
  currentSet: CurrentSetReducer
});
export default reducers;
