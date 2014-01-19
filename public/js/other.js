$(document).ready(function(){
  $("#home-image").mouseover(function(){
    $("#home-image").attr("id","home-image2");
  });

});
  
function replaceSubject(subject){
  var subject = subject;
  $("#studying").update(subject);
}