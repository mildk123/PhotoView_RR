import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAQmjfwcVnss2zfnZRSKRb5hk193UkAtfk",
  authDomain: "photoviewr.firebaseapp.com",
  databaseURL: "https://photoviewr.firebaseio.com",
  projectId: "photoviewr",
  storageBucket: "photoviewr.appspot.com",
  messagingSenderId: "915596952209"
};
firebase.initializeApp(config);

export default firebase;