import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBfEj-alRF0g_RUJ9AIeulr8sBcR6dwD2U",
  authDomain: "cms-781d4.firebaseapp.com",
  projectId: "cms-781d4",
  storageBucket: "cms-781d4.appspot.com",
  messagingSenderId: "433028038814",
  appId: "1:433028038814:web:226c5cbc7807709358fb8f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
