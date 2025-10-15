  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD3F1GCQDtEiAGUyprhDwIbuXLpb5Wm31s",
    authDomain: "directorio-web-csj.firebaseapp.com",
    projectId: "directorio-web-csj",
    storageBucket: "directorio-web-csj.firebasestorage.app",
    messagingSenderId: "271986564027",
    appId: "1:271986564027:web:40b968bf65afdb45d1c29e",
    measurementId: "G-S21EHQN250"
  };


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

console.log("Firestore inicializado:", db);
