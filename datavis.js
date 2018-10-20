var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Java", "C", "MATLAB", "HTML/CSS", "JavaScript"],
        datasets: [{
            data: [19, 10, 5, 19, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                  drawBorder: false,
                  display: false,
                  ticks: {
                    fontColor: "rgba(0, 0, 0, 0)",
                  }
                }
              }],
            xAxes: [{
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                  drawBorder: false,
                  display: false,
                }
            }]
        }
    }
});