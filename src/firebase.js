import firebase from 'firebase/app'
import 'firebase/firestore'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBDfnzdUVl36dhVstbmIafAUQxbdeNP2ug",
    authDomain: "pandemaniac-afc6f.firebaseapp.com",
    databaseURL: "https://pandemaniac-afc6f.firebaseio.com",
    projectId: "pandemaniac-afc6f",
    storageBucket: "pandemaniac-afc6f.appspot.com",
    messagingSenderId: "498834690345",
    appId: "1:498834690345:web:9987341798b2bd2028a738",
    measurementId: "G-BCPL5YYTW7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)
//   firebase.analytics()

export default firebase
