
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
	var studying = $("<div class='input-form'>What are you studying: <input type='text' studying='studying'></div>");
	studying.attr('id', 'studyingInfo')
	studying.appendTo(".container");
};

function findUsers() {
	console.log('Find Users');
};



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


