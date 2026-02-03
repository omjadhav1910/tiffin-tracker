// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDRpQIT9BLDJwTrqNFb0DH2cBakRXyjn70",
    authDomain: "tiffin-e1f3a.firebaseapp.com",
    projectId: "tiffin-e1f3a",
    storageBucket: "tiffin-e1f3a.firebasestorage.app",
    messagingSenderId: "805815426723",
    appId: "1:805815426723:web:05db48ae06932566f16916",
    measurementId: "G-EZPR1HBE32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
