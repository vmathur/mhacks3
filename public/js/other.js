$( document ).ready(function() {

$(document).ready(function(){
  $("#home-image").mouseover(function(){
    $("#home-image").attr("id","home-image2");
  });

});
  
function replaceSubject(subject){
	var newText = subject;
  document.getElementById("studying").value = newText;
}

}