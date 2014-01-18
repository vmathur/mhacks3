$(document).ready(function(){
  $("#findtab").click(function(){
 		alert("You've clicked the find tab")
  });

  $("#studytab").click(function(){
 		alert("You've clicked the studytab")
  });

  $("#Homebtn").click(function(){
 	var f = document.createElement("form");
	f.setAttribute('method',"post");
	f.setAttribute('action',"submit.php");
  });






});



var c = document.createElement("input");
c.type = "checkbox";
c.id = "checkbox1";
c.name = "check1";


