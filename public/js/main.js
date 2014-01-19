
var map;

$( document ).ready(function() {

function initialize() {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(42.3314, -83.0458)
  };
  
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  getUserStudying('Science', function(data){
      for (var i = 0; i<data.length;i++){
          var longu = data[i].location.long - 83.0458 + i;
          var lati = data[i].location.lat + 42.3384 +i;
          var studentname = data[i].username;

          createMarker(lati,longu, studentname);
      }
  });

  getLocation();
  createMarker(42.3354,-83.0428, "Bob is here");
 }

google.maps.event.addDomListener(window, 'load', initialize);
});

$(function() {
  $("#home-image").click(function(){
  });
});
 
function getUserStudying(studying, callback){
  $.get("http://localhost:3000/data/get/getUserWith/"+studying,function(data,status){
    callback(data);
  });
}

function getUserData(){
  $.get("http://localhost:3000/data/get/getUser",function(data,status){
    console.log(data)
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
  currentUser = new User(name, 0, 0, studying);

  $.ajax({
    type: "POST",
    url: "http://localhost:3000/data/post/user",
    dataType: 'json',
    data: { 'user' : currentUser},
    success: function(data) { console.log(data.name) }
  });
  
  findBuddies(currentUser);
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
  currentUser = currentUser;
  window.open("map.html","_self");
}


//FUNCTIONS NOT BEING USED

// function showFoursquare() {
//   var foursquareButton = ("<div id='foursquare'></div>")
//   $('.container').append(foursquareButton);
//   foursquareButton = $('#foursquare');
//   foursquareButton.attr('onclick', 'authenticateFoursquare();' )
//   $("#study").remove();
// }


// function authenticateFoursquare() {
//   //window.location = ();
//   alert('Success!');
// }
function openMenu(){
  $('#menu').collapse('hide');
}



// $(function() {
//   $("#update").click(function(){
  
//   var myLatlng = new google.maps.LatLng(42.3354,-83.0428) 
//   var marker = new google.maps.Marker({
//       position: myLatlng,
//       map: map,
//       title: 'Josh is here'
//   });
 
// google.maps.event.addDomListener(window, 'load', initialize);
//   });

// });


// function findUsers() {
//   var name = $("#name").val();
//   currentUser = new User(name);
// }


