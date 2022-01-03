// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRZ9R3w42-96ru4cY9gMr391pEkpt4Xec",
  authDomain: "covid-d5553.firebaseapp.com",
  projectId: "covid-d5553",
  storageBucket: "covid-d5553.appspot.com",
  messagingSenderId: "786843470810",
  appId: "1:786843470810:web:473a1fb4cd3695bfe74ee3"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const auth = firebase.auth();
export {auth};
