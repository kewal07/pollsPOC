// $(window).scroll(function() {   
//    if($(window).scrollTop() + $(window).innerHeight() == scrollHeight) {
//        alert("bottom!");
//    }
// });
/* For Fixed Header */
$(document).ready(function(){
	if ( $(window).width() > 960) {
		$(window).on('scroll', function() {
		    scrollPosition = $(this).scrollTop();
		    // console.log(scrollPosition);
		    if (scrollPosition >= 163) {
		        // If the function is only supposed to fire once
		        // $(this).off('scroll');
		        //alert("bottom");
		        //check if too heavy...always detecting while scroll...maybe some way to detect once above ???
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
		        $( ".searchBox" ).removeClass( "searchBoxScroll" );
		    }
		});
	}
	/* End */

	/*For file browse */
	var invisible = $('<div/>').css({height:0,width:0,'overflow':'hidden','display':'inline-block'});
	var label = $('<div class="fileLabel">Chose file</div>');
	var fileInput = $(":file").after(label).wrap(invisible);

	fileInput.change(function(){
	    $this = $(this);
	    var fileVal = $this.val();
    	var fileNameIndex = fileVal.lastIndexOf("\\") + 1;
    	var fileName = fileVal.substr(fileNameIndex);
    	$this.parent().next().text(fileName);
    	console.log($this.parent().parent());
    	$this.parent().parent().children().first().next().attr("placeholder", "Describe your image");
	})

	$('.fileLabel').click(function(){
	    $(this).prev().children().first().click();
	});
	/* End */

	/*charts*/
	var data = {
    labels: ["HTML & CSS", "IOS", "jQuery", "Android"],
    datasets: [
        {
            label: "Question",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81]
        }
    ]
	};
	// options = {
	//   responsive: true
	// };
	var ctx = document.getElementById("myChart").getContext("2d");
	var myNewChart = new Chart(ctx).Bar(data,{align:'h'});
	// new Chart(ctx). Bar(data, options);
	// Get context with jQuery - using jQuery's .get() method.
	/*var ctx = $("#myChart").get(0).getContext("2d");
	// This will get the first returned node in the jQuery collection.
	var myLineChart = new Chart(ctx).Line(data, options);*/
	// var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Bar(barChartData,{align:'h'});

	var data1 = [
		    {
		        value: 300,
		        color:"#F7464A",
		        highlight: "#FF5A5E",
		        label: "M"
		    },
		    {
		        value: 250,
		        color: "#46BFBD",
		        highlight: "#5AD3D1",
		        label: "F"
		    }
	]
	var ctxGender = document.getElementById("genderChart").getContext("2d");
	var myNewChartGender = new Chart(ctxGender).Doughnut(data1);
	// new Chart(ctx). Doughnut(data1, options);
	/*end*/
});

