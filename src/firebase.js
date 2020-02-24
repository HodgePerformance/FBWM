import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA-GHl4Ljk5ywrs7jE-AyXt6FQ7SnaCsUI",
  authDomain: "music-manager-2a307.firebaseapp.com",
  databaseURL: "https://music-manager-2a307.firebaseio.com",
  projectId: "music-manager-2a307",
  storageBucket: "music-manager-2a307.appspot.com",
  messagingSenderId: "445176926304",
  appId: "1:445176926304:web:e456179c0a2123851bf305"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
