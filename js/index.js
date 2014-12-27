



/*********************jcarousel library js*******************************/

$(document).ready(function(e) {
    $("#event_template_designs #large-image").html($("#event_template_designs .jcarousel li").eq(0).html());
     $("#event_template_designs .jcarousel li").click(function(e){
    $("#event_template_designs #large-image").html($(this).html());
  /*$("#large-image .contentplace")*/
  return false; // prevent default click action from happening!
     e.preventDefault(); // same thing as above
  
  });

  $('#myCarousel').carousel({
  interval: 1000
  })
    
    $('#myCarousel').on('slid.bs.carousel', function() {
      //alert("slid");
  });
   
});
/**************************************************************************/

/*******************************date picker ****************************/
$(function(){
             $('#datepairExample .time').timepicker({
                    'showDuration': true,
                    'timeFormat': 'g:ia'
                });

                $('#datepairExample .date').datepicker({
                    'format': 'm/d/yyyy',
                    'autoclose': true
                });
        

}); 
/*************************************************************************/


/*********************e calendar library js*******************************/
$(function(){
   $('#calendar').eCalendar({ 
    events: [
        {title: 'Event Title 1', description: 'Description 1', datetime: new Date(2014, 11, 12, 17)},
        {title: 'Event Title 2', description: 'Description 2', datetime: new Date(2014,11, 17, 16)},
    {title: 'Event Title 2', description: 'Description 2', datetime: new Date(2014,11, 20, 20)},
    
    ]
});
});

/**********************************************************************/

/*********************fancy box library js*******************************/
   $(document).ready(function() {
      /*
       *  Simple image gallery. Uses default settings
       */
      $('.fancybox').fancybox();
      /*
      /*
       *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
      */
      $('.fancybox-media')
        .attr('rel', 'media-gallery')
        .fancybox({
          openEffect : 'none',
          closeEffect : 'none',
          prevEffect : 'none',
          nextEffect : 'none',
          arrows : false,
          helpers : {
            media : {},
            buttons : {}
          }
        });
      /*
       *  Open manually
       */
    });
/**************************************************************************/

/*********************private and public switch js*******************************/

$(document).ready(function() {
  
  $("#new_event #switch_public").addClass('btn-success').removeClass('btnn-default');
    $("#new_event #switch_private").addClass('btn-default').removeClass('btn-success');
  $("#new_event #switch_private").val('');
  $("#new_event #switch_public").val('')
  
      $("#new_event #switch_private").click(function() {
           $("#new_event #switch_public").removeClass('btn-success').addClass('btnn-default');
           $(this).removeClass('btn-default').addClass('btn-success');
         $(this).val('private');
         $("#new_event #switch_public").val('');
            
       });
       
       $("#new_event #switch_public").click(function() {
          $(this).addClass('btn-success').removeClass('btnn-default');
                $("#new_event #switch_private").addClass('btn-default').removeClass('btn-success');
        $(this).val('public');
        $("#new_event #switch_private").val('');
       });
         

});