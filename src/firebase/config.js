import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyDr-FUFNQx-qLu2w83OcF6CNvokLcUR_6Y",
    authDomain: "olx-clone-acbc0.firebaseapp.com",
    projectId: "olx-clone-acbc0",
    storageBucket: "olx-clone-acbc0.appspot.com",
    messagingSenderId: "628076541450",
    appId: "1:628076541450:web:6bb7a032ad1a9590c551f3",
    measurementId: "G-J05LJ0VNSN"
};
  
export default firebase.initializeApp(firebaseConfig)