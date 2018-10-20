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
      position: 'top'
    }
  }
});
