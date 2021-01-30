//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyA3mm8bfBIwgHiN6BepMzSCXTdLs7YM7FE",
      authDomain: "groupchat-5bd82.firebaseapp.com",
      databaseURL: "https://groupchat-5bd82-default-rtdb.firebaseio.com",
      projectId: "groupchat-5bd82",
      storageBucket: "groupchat-5bd82.appspot.com",
      messagingSenderId: "354213929588",
      appId: "1:354213929588:web:f364bdfead8789a8472721"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("username");
    room_name = localStorage.getItem("room_name");

    function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name, 
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";

    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");
}
