import { combineReducers } from "redux";
import CurrentSetReducer from "./current-set-reducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const reducers = combineReducers({
  currentSet: CurrentSetReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
export default reducers;
