
var map;
$( document ).ready(function() {

function initialize() {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(42.3314, -83.0458)
  };
  var myLatlng = new google.maps.LatLng(42.3334,-83.0458);
  
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Arthur is here'
  });
 }

google.maps.event.addDomListener(window, 'load', initialize);
});




$(function() {
  $("#home-image").click(function(){
 	$.get("http://localhost:3000/update",function(data,status){
      console.log("")
      /*alert("Data: " + data + "\nStatus: " + status);*/
      console.log(data);
    });
  });

});

function getUserInfo() {
  var name = $("#name").val();
  currentUser = new User(name);
	var studying = $("<form class='input-form'>What are you studying: <input type='text' id='studying'><input type='button' value='Submit' onclick='getStudying();'></form>");
	studying.attr('id', 'studyingInfo')
	studying.appendTo(".container");
    document.getElementById("findInput").style.visibility="hidden";
  document.getElementById("studyingInput").style.visibility="visible";
}

function findUsers() {
  currentUser = new User(name);
	console.log('Find Users');
}

function User(name, location) {
  this.name = name;
  this.location = location;

  return this;
}

function getStudying() {
  var studying = $("#studying").val();
  currentUser.studying = studying;
}

function findUsers() {
	document.getElementById("studyingInput").style.visibility="hidden";
	document.getElementById("findInput").style.visibility="visible";
}

function addBuddy(){
	// pull up existing map, add new buddy!
}

function findUsers() {
	// pull up existing map
};


>>>>>>> 33adbdeb005374ed2f202281d76370307120d794

$("#findtab").click(function() {

	alert("hi");
  
  /*var myLatlng = new google.maps.LatLng(42.3354,-83.0428) 
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Josh is here'
  });
 
google.maps.event.addDomListener(window, 'load', initialize);*/
});

$(function() {
  $("#findtab").click(function(){
 	
 	var myLatlng = new google.maps.LatLng(42.3354,-83.0428) 
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Josh is here'
  });
 
google.maps.event.addDomListener(window, 'load', initialize);
  });

});
>>>>>>> 729f0b413bff0c8b0ff57a6387deafae655e6da8

function findBuddies(){
	// pull up existing map
}
