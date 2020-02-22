import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyA-GHl4Ljk5ywrs7jE-AyXt6FQ7SnaCsUI",
  authDomain: "music-manager-2a307.firebaseapp.com",
  databaseURL: "https://music-manager-2a307.firebaseio.com",
  projectId: "music-manager-2a307",
  storageBucket: "music-manager-2a307.appspot.com",
  messagingSenderId: "445176926304"
};
firebase.initializeApp(config);
export default firebase;