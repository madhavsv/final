//YOUR FIRE BASE LINKS
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
user=localStorage.getItem("user_name");
roomname=localStorage.getItem("room_name");
function send() {
  text=document.getElementById("message").value;
  firebase.database().ref(roomname).push({
        name:user,
        message:text,
        like:0
  });
  document.getElementById("message").value="";
}
function logout() {
      window.location="index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
}











function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("page").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
message_tag="<h4 class='message_h4'>" + message + "</h4>";
like_button= "<button class='btn btn-warning' id="+firebase_message_id +" value=" +like +" onclick='updateLike(this.id)'>";

spanthistag="<span class='glyphicon glyphicon-thumbs-up'>Like:" + like + "</span></button><hr>";
row=name_tag + message_tag + like_button + spanthistag;
document.getElementById("page").innerHTML+=row;

//End code
      } });  }); }
getData();
function updateLike(likeid) {
      buttonid=likeid;
      numberoflikes=document.getElementById(buttonid).value;
      increase=Number(numberoflikes)+1;

      firebase.database().ref(roomname).child(likeid).update({
            like:increase

      });
}
