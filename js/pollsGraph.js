google.load('visualization', '1', {packages: ['corechart', 'bar']});
$(document).ready(function(){
  $("#pollsChart").load("", function(){
        drawPollsChart();
  });
  $('#submit').click(function(){
      $('.analysis').toggle("slow");
      var delay=1000; //1 seconds
      setTimeout(function(){
      //your code to be executed after 1 seconds
        if($('.analysis').is(':visible')){
          $("#genderChart").load("", function(){
            drawGenderChart();
          });
        }
      }, delay); 
      /*charts*/
      // if($('.analysis').is(':visible')){
      //   $("#genderChart").load("", function(){
      //     drawGenderChart();
      //   });
      // }
    });    
});

function drawPollsChart() {

  var data = google.visualization.arrayToDataTable([
    ['Element', 'Votes', { role: 'style' }],
    ['Html & Css', 8.94, '#F7464A'],            // RGB value
    ['Android', 10.49, '#46BFBD'],            // English color name
    ['IOS', 19.30, '#66FF33'],
    ['Javascript', 21.45, '#FF6600'], // CSS-style declaration
        ]);

        var options = {
          chartArea: {width: '60%'},
          fontSize:20,
          bars: {
            groupWidth: 100
          },
          hAxis: {
            title: '',
            minValue: 0,
            gridlines: {
              color: 'transparent'
              },
            textPosition: 'none',
            baselineColor: 'transparent'
          },
          vAxis: {
            title: '',
            gridlines: {
              color: 'transparent'
              },
          },
          legend:{
              position:'none'
          },
           animation:{
              startup:true,
              duration: 3000,
              easing: 'inAndOut',
         },
        };

        var chart = new google.visualization.BarChart(document.getElementById('pollsChart'));
        chart.draw(data, options);
        google.visualization.events.addListener(chart, 'animationfinish', displayAnnotation);   
        function displayAnnotation(e){
         data = google.visualization.arrayToDataTable([
                ['Options', 'Votes', { role: 'style' }, { role: 'annotation' }],
                ['Html & Css', 8.94, '#F7464A','22%'],            // RGB value
                ['Android', 10.49, '#46BFBD','16%'],            // English color name
                ['IOS', 19.30, '#66FF33','56%'],
                ['Javascript', 21.45, '#FF6600','9%'], // CSS-style declaration
            ]);
        options = {
          chartArea: {width: '60%'},
          fontSize:20,
          bars: {
            groupWidth: 100
          },
          hAxis: {
            title: '',
            minValue: 0,
            gridlines: {
              color: 'transparent'
              },
            textPosition: 'none',
            baselineColor: 'transparent'
          },
          vAxis: {
            title: '',
            gridlines: {
              color: 'transparent'
              },
          },
          legend:{
              position:'none'
          },
           animation:{
              startup:true,
              duration: 1,
              easing: 'inAndOut',
         },
        };

        chart.draw(data,options);
      }
  }

function drawGenderChart() {
  // alert("sd");
  var data = google.visualization.arrayToDataTable([
    ['Gender', 'Votes'],
    ['Male',     350],
    ['Female',   435]
  ]);
  var options = {
    pieHole: 0.4,
    legend:'none'
  };
  var chart = new google.visualization.PieChart(document.getElementById('genderChart'));
  chart.draw(data, options);
}
