
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDukMX8C9AdtF3zLGHuc9K4eJZnNZTGhWU",
      authDomain: "kwitter-app-bb42e.firebaseapp.com",
      databaseURL: "https://kwitter-app-bb42e-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-bb42e",
      storageBucket: "kwitter-app-bb42e.appspot.com",
      messagingSenderId: "768620383364",
      appId: "1:768620383364:web:c187cd6c894ddb5e4d86d1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
