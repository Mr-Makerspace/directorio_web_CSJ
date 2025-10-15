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
