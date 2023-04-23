// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getDatabase, ref, update, set, onValue } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
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

function proceed() {
    alert("Log In Successfully!");
    window.location.replace("dashboard.html");
}

function loginfunct() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            var clck = new Date();

            clck.getDate();
            clck.getFullYear();


            var months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
            var hours = ["12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11",
                "12", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"];
            var mins = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09",
                "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
                "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
                "30", "31", "32", "33", "34", "35", "36", "37", "38", "39",
                "40", "41", "42", "43", "44", "45", "46", "47", "48", "49",
                "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
            var ampm;
            if (clck.getHours() <= 11) {
                var ampm = "AM";
            }
            if (clck.getHours() >= 12) {
                var ampm = "PM";
            }
            var time = hours[clck.getHours()] + ":" + mins[clck.getMinutes()] + " " + ampm;
            let month = months[clck.getMonth()];

            var date = month + " " + clck.getDate() + ", " + clck.getFullYear() + " - " + time;

            //update database
            update(ref(database, 'users/' + user.uid), {
                last_login: date,
            });
            setTimeout(proceed, 200);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert("Wrong Username or Password, Please try again.");
        });
}


document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        loginfunct();
    }
});

login.addEventListener('click', (e) => {
    loginfunct();
});

logo.addEventListener('click', (e) => {
    window.location.replace("index.html")
});
