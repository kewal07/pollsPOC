// $(window).scroll(function() {   
//    if($(window).scrollTop() + $(window).innerHeight() == scrollHeight) {
//        alert("bottom!");
//    }
// });
if ( $(window).width() > 960) {
	$(window).on('scroll', function() {
	    scrollPosition = $(this).scrollTop();
	    // console.log(scrollPosition);
	    if (scrollPosition >= 163) {
	        // If the function is only supposed to fire once
	        //$(this).off('scroll');
	        //alert("bottom");
	        //check if too heavy...alwasy detecting while scroll...maybe some way to detect once above ???
	        $("#header").attr("id","headerScroll");
	        $( ".logo img" ).addClass( "imgScroll" );
	        $( ".menu" ).addClass( "menuScroll" );
	        $( ".search" ).addClass( "searchScroll" );
	        $( ".searchBox" ).addClass( "searchBoxScroll" );
	        // Other function stuff here...
	    }
	    else{
	    	$("#headerScroll").attr("id","header");
	        $( ".logo img" ).removeClass( "imgScroll" );
	        $( ".menu" ).removeClass( "menuScroll" );
	        $( ".search" ).removeClass( "searchScroll" );
	        $( ".searchBox" ).removeClass( ".searchBoxScroll" );
	    }
	});
}