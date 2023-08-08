const Package =[
    {year:'2019' , package:{avg: 600000, high: 900000}},
    {year:'2020' , package:{avg: 500000, high: 800000}},
    {year:'2021' , package:{avg: 345000, high: 1000000}},
    {year:'2022' , package:{avg: 660000, high: 1200000}},
    {year:'2023' , package:{avg: 990000, high: 1900000}}
];
// 'rgba(255, 26, 104, 0.2)',
//       'rgba(54, 162, 235, 0.2)',
const data = {
  datasets: [{
    label: 'Average Package',
    data: Package,
    backgroundColor: 'rgba(255, 26, 104, 0.1)',
    borderColor: 'rgba(255, 26, 104, 0.5)',
    tension: 0.4,
    parsing: {
        yAxisKey: 'package.avg'
    }
  },{
    label: 'Highest Package',
    data: Package,
    backgroundColor: 'rgba(54, 162, 235, 0.1)',
    borderColor: 'rgba(54, 162, 235, 0.5)',
    tension: 0.4,
    parsing: {
        yAxisKey: 'package.high'
    }
  }]
};

// config 
const config = {
  type: 'line',
  data,
  options: {
    parsing: {
        xAxisKey: 'year'
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};

// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);