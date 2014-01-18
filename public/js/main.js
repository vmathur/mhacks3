$(function() {

  $("#findtab").click(function(){
 		alert("You've clicked the find tab")
  });

  $("#studytab").click(function(){
 		alert("You've clicked the studytab")
  });

  $("#homebtn").click(function(){
 	$( "#main" ).append( document.createTextNode( "Hello" ) );
  });

  $("#home-image").click(function(){
 	$.get("http://localhost:3000/update",function(data,status){
      console.log("")
      /*alert("Data: " + data + "\nStatus: " + status);*/
      console.log(data);
    });
  });

});


