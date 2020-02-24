import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { getFirestore, createFirestoreInstance } from "redux-firestore";
import { getFirebase, ReactReduxFirebaseProvider } from "react-redux-firebase";
import reducers from "./reducers";
import "./styles/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import firebase from "./firebase";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase }))
  )
);

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
