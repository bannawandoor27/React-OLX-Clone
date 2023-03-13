import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyBnAssx8TPqIHfiedJHeEe9B_n1bz-k8Hw",
    authDomain: "olx-clone-2da01.firebaseapp.com",
    projectId: "olx-clone-2da01",
    storageBucket: "olx-clone-2da01.appspot.com",
    messagingSenderId: "309928034906",
    appId: "1:309928034906:web:28b6dcdb2a6da60f13ce63",
    measurementId: "G-MHNPMC8Y8X"
  };
  // app initialized
export default firebase.initializeApp(firebaseConfig)
