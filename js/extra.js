

$(document).ready(function() {
    $("#large-image").html("<img src="+$(".jcarousel ul li ").eq(0).find('img').attr('src')+">");
     $(".jcarousel a").click(function(e){
    $("#large-image").html("<img src="+$(this).find('img').attr('src')+">");

  });

  $('#myCarousel').carousel({
  interval: 1000
  })
    
    $('#myCarousel').on('slid.bs.carousel', function() {
      //alert("slid");
  });
   
});

/*fancy box*/

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
	
	
	
	
	
	
	
	
	
	