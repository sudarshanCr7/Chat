const firebaseConfig = {
      apiKey: "AIzaSyAbjY5CvcUjornX77Tte6i109Op_DZTNLg",
      authDomain: "kwitter-e1155.firebaseapp.com",
      databaseURL: "https://kwitter-e1155-default-rtdb.firebaseio.com",
      projectId: "kwitter-e1155",
      storageBucket: "kwitter-e1155.appspot.com",
      messagingSenderId: "699896992631",
      appId: "1:699896992631:web:549a099e9ab8cbf29d8772"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name"). innerHTML = "Welcome " + user_name + " !";
function addRoom(){
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose :"adding room name"
});

localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
Room_names =childKey;
console.log("Room Name - " + Room_names);
row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function  logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
   
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
