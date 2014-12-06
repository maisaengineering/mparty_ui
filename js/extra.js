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