
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
    
    //this is code for getting data from the database
    //
    // $.get("http://localhost:3000/data",function(data,status){
    //   console.log("")
    //   /*alert("Data: " + data + "\nStatus: " + status);*/
    //   console.log(data);
    // });


function postUserData() {
  var name = $("#name").val();
  var studying = $("#studying").val();
  currentUser = new User(name, 0, studying);

  $.ajax({
    type: "POST",
    url: "http://localhost:3000/data/post/user",
    dataType: 'json',
    data: { 'user' : currentUser},
    success: function(data) { console.log(data) }
  });
  foursquare = showFoursquare();
  if (foursquare) {
    findBuddies();
  }
}

// function findUsers() {
//   var name = $("#name").val();
//   currentUser = new User(name);
// }

function User(name, location, studying) {
  this.name = name;
  this.location = location;
  this.studying = studying;

  return this;
}

function addBuddy(){
	// pull up existing map
  window.open("map.html","_self");
  //add new buddy!
}

function findBuddies() {
	// pull up existing map
  window.open("map.html","_self");
}

function showFoursquare() {
  var foursquareButton = ("<div id='foursquare'></div>")
  $('.container').append(foursquareButton);
  foursquareButton = $('#foursquare');
  foursquareButton.attr('onclick', 'authenticateFoursquare();' )
  $("#study").remove();
}


function authenticateFoursquare() {
  //window.location = ();
  alert('Success!');
}

$(function() {
  $("#update").click(function(){
 	
 	var myLatlng = new google.maps.LatLng(42.3354,-83.0428) 
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Josh is here'
  });
 
google.maps.event.addDomListener(window, 'load', initialize);
  });

});



