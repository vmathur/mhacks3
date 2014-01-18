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

  $("#findtab").click(function(){
 		alert("You've clicked the find tab")
  });

  $("#studytab").click(function(){
 		alert("You've clicked the studytab")
  });

  $("#postlocation").click(function(){
 	$( "<div>What are you studying?</div>" ).appendTo("#buttons");
  });

  $("#home-image").click(function(){
 	$.get("http://localhost:3000/update",function(data,status){
      console.log("")
      /*alert("Data: " + data + "\nStatus: " + status);*/
      console.log(data);
    });
  });

});


