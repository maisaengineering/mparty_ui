<!-- js for user email tags-->

$(function(){

  $('#tags input').on('focusout',function(){    
    var txt= this.value.replace(/[^a-zA-Z0-9\+\-\.\#]/g,''); // allowed characters
		
	if(txt) {

      $(this).before('<span class="tag">'+ txt.toLowerCase() +'</span>');
    }
    this.value="";
  }).on('keyup',function( e ){
    // if: comma,enter (delimit more keyCodes with | pipe)
    if(/(188|13)/.test(e.which)) $(this).focusout(); 

  });
  
  
  $('#tags').on('click','.tag',function(){
     if(confirm("want to delete this envitee's email address?")) $(this).remove(); 
  });
  
  $('.tags_wrap').click(function() {
	     $('#tags input').focus();
	})
});
<!-- ************************************-->


<!-- js for user email autocomplete-->
$(function(){
  var currencies = [
    { value: 'Afghan afghani' },
    { value: 'Albanian lek', data: 'ALL' },
	{ value: 'Sao Tome and Principe dobra', data: 'STD' },
    { value: 'Saudi riyal', data: 'SAR' },
    { value: 'Serbian dinar', data: 'RSD' },
    { value: 'Seychellois rupee', data: 'SCR' },
    { value: 'Sierra Leonean leone', data: 'SLL' },
    { value: 'Singapore dollar', data: 'SGD' },
    { value: 'Slovak koruna', data: 'SKK' },
    { value: 'Solomon Islands dollar', data: 'SBD' },
    { value: 'Somali shilling', data: 'SOS' },
    { value: 'South African rand', data: 'ZAR' },
    { value: 'Sudanese pound', data: 'SDG' },
    { value: 'Sri Lankan rupee', data: 'LKR' },
    { value: 'Sudanese pound', data: 'SDG' },
    { value: 'Surinamese dollar', data: 'SRD' },
    { value: 'Swazi lilangeni', data: 'SZL' },
    { value: 'Swedish krona', data: 'SEK' },
    { value: 'Swiss franc', data: 'CHF' },
    { value: 'Syrian pound', data: 'SYP' },
    { value: 'New Taiwan dollar', data: 'TWD' },
    { value: 'Tajikistani somoni', data: 'TJS' },
    { value: 'Tanzanian shilling', data: 'TZS' },
    { value: 'Thai baht', data: 'THB' },
    { value: 'Paanga', data: 'TOP' },
    { value: 'Trinidad and Tobago dollar', data: 'TTD' },
    { value: 'Tunisian dinar', data: 'TND' },
    { value: 'Turkish new lira', data: 'TRY' },
    { value: 'Turkmen manat', data: 'TMM' },
    { value: 'Ugandan shilling', data: 'UGX' },
    { value: 'Ukrainian hryvnia', data: 'UAH' },
    { value: 'United Arab Emirates dirham', data: 'AED' },
    { value: 'British pound', data: 'GBP' },
    { value: 'United States dollar', data: 'USD' },
    { value: 'Uruguayan peso', data: 'UYU' },
    { value: 'Uzbekistani som', data: 'UZS' },
    { value: 'Vanuatu vatu', data: 'VUV' },
    { value: 'Venezuelan bolivar', data: 'VEB' },
    { value: 'Vietnamese dong', data: 'VND' },
    { value: 'Yemeni rial', data: 'YER' },
    { value: 'Zambian kwacha', data: 'ZMK' },
    { value: 'Zimbabwean dollar', data: 'ZWD' },
	{ value: 'Sadashiv', data: 'ZWD' },
  ];
  
  // setup autocomplete function pulling from currencies[] array
 $(function(){
  $('#autocomplete').autocomplete({
    lookup: currencies,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      $('#outputcontent').html(thehtml);
    }
  });
 }); 
});





<!-- js for venue select redirection-->
$(function(){
  
	  $('#new_event #venue_type').bind('change', function () {
         if($(this).val() == 'choose'){
			 $('#venue_dform').fadeOut()
			 window.location = '../MPARTY_UI_V2/venues.html'; // redirect
		 }else {
			$('#venue_dform').fadeIn('slow') 
	     }
      });
	  
	  
    });
<!-- ************************************-->



/*************end time toggle option *********/ 
$(".btn_add_endtime").click(function(e) {
	  $("#endtime").fadeIn("slow");
	  $(this).fadeOut("slow");
	   $(".btn_remove_endtime").fadeIn("slow");
	   return false;
	   e.preventDefault();
	});
$(".btn_remove_endtime").click(function() {
	  $("#endtime").fadeOut("slow");
	  $(this).fadeOut("slow")
	  $(".btn_add_endtime").fadeIn("slow");
	  return false;
	   e.preventDefault();
	});	

<!-- ************************************-->

<!-- ************** top sliding alerts  ********-->
   $(document).ready(function() {
	       //$(".btn_create").on("click",function(){ 
			$(".alert_wrapper").animate({top:'10px'}, 500);
			
				    setTimeout(function() {
					 $(".alert_wrapper").animate({top:'-60px'}, 250)}
					   , 3000)
  //});
   });
<!-- ******************************************-->		   



 /*****************show debit card credit card details code **************/
 
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
	/*$("input[name='Adebitcard_type']").val();*/

  });
 /**********************************************/
  