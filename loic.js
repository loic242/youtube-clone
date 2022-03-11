// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_Mq-VGaPVJlYHYBectIGCrs9vGLPAJDk",
  authDomain: "clone-by-loic-mavah-f40c1.firebaseapp.com",
  projectId: "clone-by-loic-mavah-f40c1",
  storageBucket: "clone-by-loic-mavah-f40c1.appspot.com",
  messagingSenderId: "875845962430",
  appId: "1:875845962430:web:68f17d5631c8956d56acef",
  measurementId: "G-X9QXSGJR9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);