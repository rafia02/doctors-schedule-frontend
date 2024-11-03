// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDUlPZsRkfwC7ishv6VgghADpwfOLBIgpM",
//   authDomain: "doctors-schedule-project.firebaseapp.com",
//   projectId: "doctors-schedule-project",
//   storageBucket: "doctors-schedule-project.firebasestorage.app",
//   messagingSenderId: "503415964004",
//   appId: "1:503415964004:web:846d28ceebc76e3315ba71"
// };

const firebaseConfig = {
    apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
  };






// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth } ;