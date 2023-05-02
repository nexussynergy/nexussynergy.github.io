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

function lesson1complete() {
  document.getElementById("l1 img").style.border = "4px solid green"
  document.getElementById("l1 button").style.backgroundColor = "green"
  const element = document.getElementById('l1 button');
  document.getElementById("l1span").innerHTML = "Completed"

  element.addEventListener('mouseover', function () {
    element.style.background = "#41F573"
    document.getElementById("l1span").style.color = "black"
  });

  element.addEventListener('mouseout', function () {
    element.style.background = "green"
    document.getElementById("l1span").style.color = "white"
  });

  element.addEventListener("click", function () {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
  });
}
function lesson2complete() {
  document.getElementById("l2 img").style.border = "4px solid green"
  document.getElementById("l2 button").style.backgroundColor = "green"
  const element2 = document.getElementById('l2 button');
  document.getElementById("l2span").innerHTML = "Completed"

  element2.addEventListener('mouseover', function () {
    element2.style.background = "#41F573"
    document.getElementById("l2span").style.color = "black"
  });

  element2.addEventListener('mouseout', function () {
    element2.style.background = "green"
    document.getElementById("l2span").style.color = "white"
  });

  element2.addEventListener("click", function () {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
  });
}
function lesson3complete() {
  document.getElementById("l3 img").style.border = "4px solid green"
  document.getElementById("l3 button").style.backgroundColor = "green"
  const element3 = document.getElementById('l3 button');
  document.getElementById("l3span").innerHTML = "Completed"

  element3.addEventListener('mouseover', function () {
    element3.style.background = "#41F573"
    document.getElementById("l3span").style.color = "black"
  });

  element3.addEventListener('mouseout', function () {
    element3.style.background = "green"
    document.getElementById("l3span").style.color = "white"
  });

  element3.addEventListener("click", function () {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
  });
}
function lesson4complete() {
  document.getElementById("l4 img").style.border = "4px solid green"
  document.getElementById("l4 button").style.backgroundColor = "green"
  const element4 = document.getElementById('l4 button');
  document.getElementById("l4span").innerHTML = "Completed"

  element4.addEventListener('mouseover', function () {
    element4.style.background = "#41F573"
    document.getElementById("l4span").style.color = "black"
  });

  element4.addEventListener('mouseout', function () {
    element4.style.background = "green"
    document.getElementById("l4span").style.color = "white"
  });

  element4.addEventListener("click", function () {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
  });
}
function lesson5complete() {
  document.getElementById("l5 img").style.border = "4px solid green"
  document.getElementById("l5 button").style.backgroundColor = "green"
  const element5 = document.getElementById('l5 button');
  document.getElementById("l5span").innerHTML = "Completed"

  element5.addEventListener('mouseover', function () {
    element5.style.background = "#41F573"
    document.getElementById("l5span").style.color = "black"
  });

  element5.addEventListener('mouseout', function () {
    element5.style.background = "green"
    document.getElementById("l5span").style.color = "white"
  });

  element5.addEventListener("click", function () {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
  });
}
function lesson6complete() {
  document.getElementById("l6 img").style.border = "4px solid green"
  document.getElementById("l6 button").style.backgroundColor = "green"
  const element6 = document.getElementById('l6 button');
  document.getElementById("l6span").innerHTML = "Completed"

  element6.addEventListener('mouseover', function () {
    element6.style.background = "#41F573"
    document.getElementById("l6span").style.color = "black"
  });

  element6.addEventListener('mouseout', function () {
    element6.style.background = "green"
    document.getElementById("l6span").style.color = "white"
  });

  element6.addEventListener("click", function () {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
  });
}
function lesson7complete() {
  document.getElementById("l7 img").style.border = "4px solid green"
  document.getElementById("l7 button").style.backgroundColor = "green"
  const element7 = document.getElementById('l7 button');
  document.getElementById("l7span").innerHTML = "Completed"

  element7.addEventListener('mouseover', function () {
    element7.style.background = "#41F573"
    document.getElementById("l7span").style.color = "black"
  });

  element7.addEventListener('mouseout', function () {
    element7.style.background = "green"
    document.getElementById("l7span").style.color = "white"
  });

  element7.addEventListener("click", function () {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
  });
}
function lesson8complete() {
  document.getElementById("l8 img").style.border = "4px solid green"
  document.getElementById("l8 button").style.backgroundColor = "green"
  const element8 = document.getElementById('l8 button');
  document.getElementById("l8span").innerHTML = "Completed"

  element8.addEventListener('mouseover', function () {
    element8.style.background = "#41F573"
    document.getElementById("l8span").style.color = "black"
  });

  element8.addEventListener('mouseout', function () {
    element8.style.background = "green"
    document.getElementById("l8span").style.color = "white"
  });

  element8.addEventListener("click", function () {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
  });
}
function lesson9complete() {
  document.getElementById("l9 img").style.border = "4px solid green"
  document.getElementById("l9 button").style.backgroundColor = "green"
  const element9 = document.getElementById('l9 button');
  document.getElementById("l9span").innerHTML = "Completed"

  element9.addEventListener('mouseover', function () {
    element9.style.background = "#41F573"
    document.getElementById("l9span").style.color = "black"
  });

  element9.addEventListener('mouseout', function () {
    element9.style.background = "green"
    document.getElementById("l8span").style.color = "white"
  });

  element9.addEventListener("click", function () {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
  });
}
function lesson10complete() {
  document.getElementById("l10 img").style.border = "4px solid green"
  document.getElementById("l10 button").style.backgroundColor = "green"
  const element10 = document.getElementById('l10 button');
  document.getElementById("l10span").innerHTML = "Completed"

  element10.addEventListener('mouseover', function () {
    element10.style.background = "#41F573"
    document.getElementById("l10span").style.color = "black"
  });

  element10.addEventListener('mouseout', function () {
    element10.style.background = "green"
    document.getElementById("l10span").style.color = "white"
  });

  element10.addEventListener("click", function () {
    window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    //read username from database
    const usernameRef = ref(db, 'users/' + uid + '/username');
    const levelRef = ref(db, 'users/' + uid + '/level');
    onValue(usernameRef, (snapshot) => {
      const data = snapshot.val();
      document.getElementById("usergreet").innerHTML = "Welcome <span>" + data + "</span>!";
      document.getElementById("mobileusergreet").innerHTML = "Welcome <span>" + data + "</span>!";
    });
    onValue(levelRef, (snapshot) => {
      const data = snapshot.val();
      if(data < 11){
        document.getElementById("level").innerHTML = "Level: " + data;
        document.getElementById("mobilelevel").innerHTML = "Level: " + data;
      }
      else{
        document.getElementById("level").innerHTML = "Lessons Completed"
        document.getElementById("mobileslevel").innerHTML = "Lessons Completed"
      }
      
      if (data == 1) {
        document.getElementById("l1 img").style.border = "4px solid skyblue"
        document.getElementById("l1 button").style.backgroundColor = "skyblue"
        const element = document.getElementById('l1 button');
        document.getElementById("l1span").innerHTML = "In Progress"

        element.addEventListener('mouseover', function () {
          element.style.background = "#6AA8ED"
          document.getElementById("l1span").style.color = "black"
        });

        element.addEventListener('mouseout', function () {
          element.style.background = "skyblue"
          document.getElementById("l1span").style.color = "white"
        });

        element.addEventListener("click", function () {
          window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        });
      }
      else if (data == 2) {
        //l1
        lesson1complete();

        //l2
        document.getElementById("l2 img").style.border = "4px solid skyblue"
        document.getElementById("l2 button").style.backgroundColor = "skyblue"
        const element2 = document.getElementById('l2 button');
        document.getElementById("l2span").innerHTML = "In Progress"

        element2.addEventListener('mouseover', function () {
          element2.style.background = "#6AA8ED"
          document.getElementById("l2span").style.color = "black"
        });

        element2.addEventListener('mouseout', function () {
          element2.style.background = "skyblue"
          document.getElementById("l2span").style.color = "white"
        });

        element2.addEventListener("click", function () {
          window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        });
      }
      else if (data == 3) {
        //l1
        lesson1complete()

        //l2
        lesson2complete()

        //l3
        document.getElementById("l3 img").style.border = "4px solid skyblue"
        document.getElementById("l3 button").style.backgroundColor = "skyblue"
        const element3 = document.getElementById('l3 button');
        document.getElementById("l3span").innerHTML = "In Progress"

        element3.addEventListener('mouseover', function () {
          element3.style.background = "#6AA8ED"
          document.getElementById("l3span").style.color = "black"
        });

        element3.addEventListener('mouseout', function () {
          element3.style.background = "skyblue"
          document.getElementById("l3span").style.color = "white"
        });

        element3.addEventListener("click", function () {
          window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        });
      }
      else if (data == 4) {
        lesson1complete()
        lesson2complete()
        lesson3complete()
        document.getElementById("l4 img").style.border = "4px solid skyblue"
        document.getElementById("l4 button").style.backgroundColor = "skyblue"
        const element4 = document.getElementById('l4 button');
        document.getElementById("l4span").innerHTML = "In Progress"

        element4.addEventListener('mouseover', function () {
          element4.style.background = "#6AA8ED"
          document.getElementById("l4span").style.color = "black"
        });

        element4.addEventListener('mouseout', function () {
          element4.style.background = "skyblue"
          document.getElementById("l4span").style.color = "white"
        });

        element4.addEventListener("click", function () {
          window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        });
      }
      else if (data == 5) {
        lesson1complete()
        lesson2complete()
        lesson3complete()
        lesson4complete()
        document.getElementById("l5 img").style.border = "4px solid skyblue"
        document.getElementById("l5 button").style.backgroundColor = "skyblue"
        const element5 = document.getElementById('l5 button');
        document.getElementById("l5span").innerHTML = "In Progress"

        element5.addEventListener('mouseover', function () {
          element5.style.background = "#6AA8ED"
          document.getElementById("l5span").style.color = "black"
        });

        element5.addEventListener('mouseout', function () {
          element5.style.background = "skyblue"
          document.getElementById("l5span").style.color = "white"
        });

        element5.addEventListener("click", function () {
          window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        });
      }
      else if (data == 6) {
        lesson1complete()
        lesson2complete()
        lesson3complete()
        lesson4complete()
        lesson5complete()
        document.getElementById("l6 img").style.border = "4px solid skyblue"
        document.getElementById("l6 button").style.backgroundColor = "skyblue"
        const element6 = document.getElementById('l6 button');
        document.getElementById("l6span").innerHTML = "In Progress"

        element6.addEventListener('mouseover', function () {
          element6.style.background = "#6AA8ED"
          document.getElementById("l6span").style.color = "black"
        });

        element6.addEventListener('mouseout', function () {
          element6.style.background = "skyblue"
          document.getElementById("l6span").style.color = "white"
        });

        element6.addEventListener("click", function () {
          window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        });
      }
      else if (data == 7) {
        lesson1complete()
        lesson2complete()
        lesson3complete()
        lesson4complete()
        lesson5complete()
        lesson6complete()
        document.getElementById("l7 img").style.border = "4px solid skyblue"
        document.getElementById("l7 button").style.backgroundColor = "skyblue"
        const element7 = document.getElementById('l7 button');
        document.getElementById("l7span").innerHTML = "In Progress"

        element7.addEventListener('mouseover', function () {
          element7.style.background = "#6AA8ED"
          document.getElementById("l7span").style.color = "black"
        });

        element7.addEventListener('mouseout', function () {
          element7.style.background = "skyblue"
          document.getElementById("l7span").style.color = "white"
        });

        element7.addEventListener("click", function () {
          window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        });
      }
      else if (data == 8) {
        lesson1complete()
        lesson2complete()
        lesson3complete()
        lesson4complete()
        lesson5complete()
        lesson6complete()
        lesson7complete()
        document.getElementById("l8 img").style.border = "4px solid skyblue"
        document.getElementById("l8 button").style.backgroundColor = "skyblue"
        const element8 = document.getElementById('l8 button');
        document.getElementById("l8span").innerHTML = "In Progress"

        element8.addEventListener('mouseover', function () {
          element8.style.background = "#6AA8ED"
          document.getElementById("l8span").style.color = "black"
        });

        element8.addEventListener('mouseout', function () {
          element8.style.background = "skyblue"
          document.getElementById("l8span").style.color = "white"
        });

        element8.addEventListener("click", function () {
          window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        });
      }
      else if (data == 9) {
        lesson1complete()
        lesson2complete()
        lesson3complete()
        lesson4complete()
        lesson5complete()
        lesson6complete()
        lesson7complete()
        lesson8complete()
        document.getElementById("l9 img").style.border = "4px solid skyblue"
        document.getElementById("l9 button").style.backgroundColor = "skyblue"
        const element9 = document.getElementById('l9 button');
        document.getElementById("l9span").innerHTML = "In Progress"

        element9.addEventListener('mouseover', function () {
          element9.style.background = "#6AA8ED"
          document.getElementById("l9span").style.color = "black"
        });

        element9.addEventListener('mouseout', function () {
          element9.style.background = "skyblue"
          document.getElementById("l9span").style.color = "white"
        });

        element9.addEventListener("click", function () {
          window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        });
      }
      else if (data == 10) {
        lesson1complete()
        lesson2complete()
        lesson3complete()
        lesson4complete()
        lesson5complete()
        lesson6complete()
        lesson7complete()
        lesson8complete()
        lesson9complete()
        document.getElementById("l10 img").style.border = "4px solid skyblue"
        document.getElementById("l10 button").style.backgroundColor = "skyblue"
        const element10 = document.getElementById('l10 button');
        document.getElementById("l10span").innerHTML = "In Progress"

        element10.addEventListener('mouseover', function () {
          element10.style.background = "#6AA8ED"
          document.getElementById("l10span").style.color = "black"
        });

        element10.addEventListener('mouseout', function () {
          element10.style.background = "skyblue"
          document.getElementById("l10span").style.color = "white"
        });

        element10.addEventListener("click", function () {
          window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        });
      }
      else {
        lesson1complete()
        lesson2complete()
        lesson3complete()
        lesson4complete()
        lesson5complete()
        lesson6complete()
        lesson7complete()
        lesson8complete()
        lesson9complete()
        lesson10complete()
      }
    });
  }
});

logo.addEventListener('click', (e) => {
  window.location.replace("index.html")
});

mobilelog.addEventListener('click', (e) => {

  signOut(auth).then(() => {
    alert("Sign Out Successfully!");
    window.location.replace("login.html");
    // Sign-out successful.
  }).catch((error) => {
    alert("Error, Please try again");
    // An error happened.
  });


});