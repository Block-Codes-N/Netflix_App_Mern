// import firebase from 'firebase'


// const firebaseConfig = {
//     apiKey: "AIzaSyD6ubGud15m9_zW6ywql_qRFbDM1aJxNoM",
//     authDomain: "netflix-bd904.firebaseapp.com",
//     projectId: "netflix-bd904",
//     storageBucket: "netflix-bd904.appspot.com",
//     messagingSenderId: "918638804446",
//     appId: "1:918638804446:web:171d457c32beb1150c314f",
//     measurementId: "G-SS98K984MJ"
//   }


// firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage();

// export default storage;

import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD6ubGud15m9_zW6ywql_qRFbDM1aJxNoM",
  authDomain: "netflix-bd904.firebaseapp.com",
  projectId: "netflix-bd904",
  storageBucket: "netflix-bd904.appspot.com",
  messagingSenderId: "918638804446",
  appId: "1:918638804446:web:171d457c32beb1150c314f",
  measurementId: "G-SS98K984MJ"
}

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;