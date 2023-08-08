
function myFunction(a) {
    let labels = [['Amazon', 'Flipkart', 'Zoho', 'TCS', 'Wipro', 'Accenture'],['Amazon', 'Flipkart', 'Zoho', 'TCS', 'Wipro', 'Accenture'],['Amazon', 'Flipkart', 'Zoho', 'TCS', 'Wipro', 'Accenture'],['Amazon', 'Flipkart', 'Zoho', 'TCS', 'Wipro', 'Accenture']];
    let data = [[12, 19, 3, 5, 2, 3],[12, 19, 3, 5, 2, 3],[12, 19, 3, 5, 2, 3],[12, 19, 3, 5, 2, 3]];
    let i = parseInt(a);
    graph(labels[i],data[i]);
}

function graph(names,datas){
    let ctx = document.getElementById('myChart');
  
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: names,
        datasets: [{
          label: '# of Students',
          data: datas,
          backgroundColor:[
            'rgba(255,99,132,0.2)',
            'rgba(55,169,232,0.2)',
            'rgba(255,209,82,0.2)',
            'rgba(75,199,199,0.2)',
            'rgba(155,102,255,0.2)',
            'rgba(255,159,62,0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(55,169,232,1)',
            'rgba(255,209,82,1)',
            'rgba(75,199,199,1)',
            'rgba(155,102,255,1)',
            'rgba(255,159,62,1)'
          ],
          borderWidth: 1
          
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
}

