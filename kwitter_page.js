user_name= localStorage.getItem("user");
room_name= localStorage.getItem("room_name");


function send(){
      message= document.getElementById("message").value;
      firebase.database().ref(room_name).push({
            Name: user_name,
            Message: message,
            Like:0
      });
      document.getElementById("message").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
