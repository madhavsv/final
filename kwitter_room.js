
    var firebaseConfig = {
      apiKey: "AIzaSyCmUFn7ZZpY9aL5BUAXO7xuclzsfCj7p_U",
      authDomain: "kwitter-9399e.firebaseapp.com",
      databaseURL: "https://kwitter-9399e-default-rtdb.firebaseio.com",
      projectId: "kwitter-9399e",
      storageBucket: "kwitter-9399e.appspot.com",
      messagingSenderId: "193141302378",
      appId: "1:193141302378:web:a3eea371e248ffdb711613"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

login_name=localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML="Welcome " + login_name + "!";
function addroom() {
      room=document.getElementById("roomname").value;
      firebase.database().ref("/").child(room).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room);
      window.location="kwitter_page.html";
      
}










function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id='" + Room_names + "'onclick='redirectetoroomname(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectetoroomname(name) {
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
      
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      
}

