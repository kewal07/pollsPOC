// $(window).scroll(function() {   
//    if($(window).scrollTop() + $(window).innerHeight() == scrollHeight) {
//        alert("bottom!");
//    }
// });
/* For Fixed Header */
$(document).ready(function(){
	if ( $(window).width() > 960) {
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

	// options = {
	// 	responsive: false,
	// 	scaleShowGridLines : false
	// };
	// /*Polls Bar chart*/
	// var data = {
	// 	    labels: ["HTML & CSS", "IOS", "jQuery", "Android"],
	// 	    datasets: [
	// 	        {
	// 	            label: "Question",
	// 	            fillColor: "rgba(220,220,220,0.5)",
	// 	            strokeColor: "rgba(220,220,220,0.8)",
	// 	            highlightFill: "rgba(220,220,220,0.75)",
	// 	            highlightStroke: "rgba(220,220,220,1)",
	// 	            data: [65, 59, 80, 81]
	// 	        }
	// 	    ]
	// 		};
	// 		// options = {
	// 		//   responsive: true
	// 		// };
	// 		var ctx = document.getElementById("pollsChart").getContext("2d");
	// 		var horizontalBarChartPolls = new Chart(ctx).HorizontalBar(data, options);
			//var myNewChart = new Chart(ctx).Bar(data,options);
			// new Chart(ctx). Bar(data, options);
			// Get context with jQuery - using jQuery's .get() method.
			/*var ctx = $("#myChart").get(0).getContext("2d");
			// This will get the first returned node in the jQuery collection.
			var myLineChart = new Chart(ctx).Line(data, options);*/
			// var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Bar(barChartData,{align:'h'});
	/* End */

	/* Show Hide analysis */

	// $('#submit').click(function(){
	// 	$('.analysis').toggle("slow");
	// 	/*charts*/
	// 	if($('.analysis').is(':visible')){
			
	// 	}
	// });
	/* End */
	
	// function drawMarkersMap(){
	// 	 var data = google.visualization.arrayToDataTable([
	// 	          ['State', 'Data'],
	// 	          ['West Bengal', 5],
 //                  ['Karnataka', 22],
 //                  ['Jharkhand', 37],
 //                  ['Andhra Pradesh', 15],
 //                  ['Assam',7],
 //                  ['Rajasthan',102],
 //                  ['Gujarat',112],
 //                  ['Haryana',3],
 //                  ['Goa',76],
 //                  ['Arunachal Pradesh',13],
 //                  ['Bihar',47],
 //                  ['Chhattisgarh',39],
 //                  ['Himachal Pradesh',20],
 //                  ['Kerala',33],
 //                  ['Madhya Pradesh',21],
 //                  ['Maharashtra',45],
 //                  ['Manipur',77],
 //                  ['Meghalaya',67],
 //                  ['Mizoram',1],
 //                  ['Nagaland',4],
 //                  ['Punjab',65],
 //                  ['Sikkim',8],
 //                  ['Telangana',21],
 //                  ['Tripura',3],
 //                  ['Uttar Pradesh',143],
 //                  ['Jammu and Kashmir',17],
 //                  ['Tamil Nadu',33],
 //                  ['Orissa',99],
 //                  ['Puducherry',11],
 //                  ['Lakshadweep',1],
 //                  ['Chandigarh',44],
 //                  ['Delhi',175],
 //                  ['Andaman and Nicobar Islands',3],
 //                  ['IN-UT',11]
 //        ]);
 
 //      	var options = {
	//         region: 'IN',
	//         displayMode: 'regions',
	//         resolution: 'provinces',
	//         datalessRegionColor: '#f8bbd0',
	//         colorAxis: {colors: ['#FF9900', '#FFFFFF', '#00CC00']},
	//         backgroundColor: '#81d4fa',
	//         domain: 'IN',
	//         keepAspectRatio: true
 //      	};
 
 //      var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
 //      chart.draw(data, options);
 //  };
    //   function drawMarkersMap() {
    //     var data = google.visualization.arrayToDataTable([
		  //         ['State', 'Data'],
		  //         ['West Bengal', 5],
    //               ['Karnataka', 22],
    //               ['Jharkhand', 37],
    //               ['Andhra Pradesh', 15],
    //               ['Assam',7],
    //               ['Rajasthan',102],
    //               ['Gujarat',112],
    //               ['Haryana',3],
    //               ['Goa',76],
    //               ['Arunachal Pradesh',13],
    //               ['Bihar',47],
    //               ['Chhattisgarh',39],
    //               ['Himachal Pradesh',20],
    //               ['Kerala',33],
    //               ['Madhya Pradesh',21],
    //               ['Maharashtra',45],
    //               ['Manipur',77],
    //               ['Meghalaya',67],
    //               ['Mizoram',1],
    //               ['Nagaland',4],
    //               ['Punjab',65],
    //               ['Sikkim',8],
    //               ['Telangana',21],
    //               ['Tripura',3],
    //               ['Uttar Pradesh',143],
    //               ['Jammu and Kashmir',17],
    //               ['Tamil Nadu',33],
    //               ['Orissa',99],
    //               ['Puducherry',11],
    //               ['Lakshadweep',1],
    //               ['Chandigarh',44],
    //               ['Delhi',175],
    //               ['Andaman and Nicobar Islands',3],
    //               ['IN-UT',11]
    //     ]);
 
    //   	var options = {
	   //      region: 'IN',
	   //      displayMode: 'regions',
	   //      resolution: 'provinces',
	   //      datalessRegionColor: '#f8bbd0',
	   //      colorAxis: {colors: ['#FF9900', '#FFFFFF', '#00CC00']},
	   //      backgroundColor: '#81d4fa',
	   //      domain: 'IN',
	   //      keepAspectRatio: true
    //   	};
 
    //   var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
    //   chart.draw(data, options);
    // }
});

