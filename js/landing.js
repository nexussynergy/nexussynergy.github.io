// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8R0mRmt4R4SknJ9WHior8QukvH4JRcWk",
  authDomain: "entrep-101-test.firebaseapp.com",
  databaseURL: "https://entrep-101-test-default-rtdb.firebaseio.com",
  projectId: "entrep-101-test",
  storageBucket: "entrep-101-test.appspot.com",
  messagingSenderId: "1042607918270",
  appId: "1:1042607918270:web:d310c8614354cd866562ef",
  measurementId: "G-G43ZGKCQ3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const user = auth.currentUser;
const db = getDatabase();

logo.addEventListener('click', (e) => {
    window.location.href = "index.html"
});

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      //read username from database
      window.location.replace("dashboard.html")
    }
  });