var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Java", "C", "MATLAB", "HTML/CSS", "JavaScript"],
    datasets: [{
      data: [19, 10, 5, 19, 10],
      backgroundColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(255, 159, 64, 1)'
      ]
    }]
  },
  options: {
    legend: {
      display: true,
      position: 'bottom'
    },
    scales: {
      yAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
          drawBorder: false,
          weight: 0,
          display: false,
          ticks: {
            display: false
          }
        }
      }],
      xAxes: [{
        gridLines: {
          color: "rgba(0, 0, 0, 0)",
          drawBorder: false,
          display: false,
          weight: 0,
          ticks: {
            display: false
          }
        }
      }]
    }
  }
});
