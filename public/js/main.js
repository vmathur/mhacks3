
$( document ).ready(function() {
var map;
function initialize() {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(42.3314, -83.0458)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
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
	var studying = $("<div class='input-form'>What are you studying: <input type='text' studying='studying'></div>");
	studying.attr('id', 'studyingInfo')
	studying.appendTo(".container");
}

function findUsers() {
	console.log('Find Users');
}



