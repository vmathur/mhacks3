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


