var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["STEM", "Arts & Humanities", "Miscellaneous", "Communications", "Hobbies"],
    datasets: [{
      data: [19, 10, 5, 19, 10],
      backgroundColor: [
      'rgba(107, 160, 75, 1)',
      'rgba(57, 122, 101, 1)',
      'rgba(232, 245, 186, 1)',
      'rgba(102, 168, 143, 1)',
      'rgba(177, 232, 144, 1)'
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
