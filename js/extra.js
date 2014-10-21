$(document).ready(function() {
    $("#large-image").html("<img src="+$(".carousel-inner .item .row .col-sm-3").eq(0).find('img').attr('src')+">");
     $(".carousel-inner a").click(function(e){
    $("#large-image").html("<img src="+$(this).find('img').attr('src')+">");

  });

  $('#myCarousel').carousel({
  interval: 0
  })
    
    $('#myCarousel').on('slid.bs.carousel', function() {
      //alert("slid");
  });

    
});

function ontext() {
 

var myeventfield = document.getElementById("testeventname").value;

var myeventoutput = document.getElementById("event_output");

myeventoutput.innerHTML=myeventfield; 

}
