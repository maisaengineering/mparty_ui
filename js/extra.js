
 /*show debit card credit card details code */
  $(document).ready(function() {
	  $("#disable_carddetails input").prop("disabled", true) /*default disable card details*/
	   $("#disable_carddetails button").prop("disabled", true)
	   
	  $("#payment_method #select_payment_types").bind("change", function() {
	
	           if($(this).val() == "creditcard") {
				     $("#disable_carddetails input").prop("disabled", false)  /*enable card details*/
					 $("#disable_carddetails button").prop("disabled", false)
					 $(".debitcard_types").hide();
				   }
			   else if ($(this).val() == "debitcard") {
					 $(".debitcard_types").fadeIn("slow")  /*showing debit card types*/
				  }
				else {
					  $(".debitcard_types").hide() 
					  $("#disable_carddetails input").prop("disabled", true) /*default disable card details*/
					  $("#disable_carddetails button").prop("disabled", true)
					  }
	});
	
   
   /*selecting visa, mastercard from with radio button */
    $("input[name='debitcard_type']").click(function() {
		   if($(this).val() == "visamaster") {
			      $("#disable_carddetails input").prop("disabled", false)  /*enable card details*/
					 $("#disable_carddetails button").prop("disabled", false)
			   }
		});
	//$("input[name='Adebitcard_type']").val();

  });
 /**********************************************/
  
  
  
$(document).ready(function(e) {
    $("#large-image .imageplace").html("<img src="+ $(".jcarousel ul li ").eq(0).find('img').attr('src')+">");
     $(".jcarousel a").click(function(e){
    $("#large-image .imageplace").html("<img src="+$(this).find('img').attr('src')+">");
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
	
	
	

	
	
	
	
	