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

});