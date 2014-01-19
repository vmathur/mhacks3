
var map;

$( document ).ready(function() {

function initialize() {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(42.3314, -83.0458)
  };
  
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  getUserData(function(res){
        console.log(res[res.length-1].studying);
        getUserStudying(res[res.length-1].studying, function(data){
          console.log(data);
          for (var i = 0; i<data.length;i++){
            var longu = parseInt(data[i].location.long) + 0.1*i;
            var lati = parseInt(data[i].location.lat) + 0.1*i;
            var studentname = data[i].username;
            console.log(longu+'  '+lati);
            createMarker(lati,longu, studentname);
          }
    });
  });
  getLocation();
 }

google.maps.event.addDomListener(window, 'load', initialize);
});

$(function() {
  $("#home-image").click(function(){
  });
});
 
// function replaceSubject(subject){
//   var subject = subject;
//   $("#studying").update(subject);
// }

function getUserStudying(studying, callback){
  $.get("http://localhost:3000/data/get/getUserWith/"+studying,function(data,status){
    callback(data);
  });
}

function getUserData(callback){
  $.get("http://localhost:3000/data/get/getUser",function(data,status){
    callback(data);
  });
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  var myLat = position.coords.latitude;
  var myLong = position.coords.longitude; 
  createMarker(myLat, myLong, "You are here");
}

function createMarker (lat, lng, Message) {
  var latlng = new google.maps.LatLng(lat, lng);
  var marker = new google.maps.Marker({
    position: latlng,
    map: map, 
    title: Message
  })
}

function postUserData() {
  var name = $("#name").val();
  var studying = $("#studying").val();
  currentUser = new User(name, 42.3384, -83.0458, studying);
  $.ajax({
    type: "POST",
    url: "http://localhost:3000/data/post/user",
    //dataType: 'json',
    data: { 'username' : currentUser.name, 'longitude' : currentUser.lng, 'latitude' : currentUser.lat, 'studying' : currentUser.studying},
    success: function(result) {
       console.log(result);
       findBuddies(currentUser);
    }
  });
}

function User(name, lat, lng, studying) {
  this.name = name;
  this.lat = lat;
  this.lng = lng;
  this.studying = studying;

  return this;
}

function addBuddy(){
	// pull up existing map
  window.open("map.html","_self");
  //add new buddy!
}

function findBuddies(currentUser) {
	// pull up existing map
  window.open("map.html","_self");
  currentUser = currentUser;
}

function changeSubject() {
  window.open("index.html","_self");
}







