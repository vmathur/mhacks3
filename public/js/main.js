$(function() {


  $("#postlocation").click(getUserInfo);

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


