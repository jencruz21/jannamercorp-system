window.onload = () => {
    console.log("On Loading the Code");
    const adminLineChart = document.getElementById("lineChart");
    const adminLineChart2 = document.getElementById("lineChart2");

    fetch("/admin/api/charts_total_ordering_sales", {
        method: "GET",
        headers: {
            "Accepts": "application/json",
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            new Chart(adminLineChart, {
                type: 'bar',
                data: {
                  labels:data.map(d => d._id) ,
                  datasets: [{
                    label: 'No. of Sales This Month',
                    data: data.map(d => d.total_sales),
                    borderWidth: 1,
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)'
                      ],
                  }]
                },
                options: {
                  scales: {
                    y: {
                      beginAtZero: true
                    }
                  },
                  layout: {
                    padding: 50
                  }
                }
              });
        }).catch(err => {
            console.log(err);
        });

  

  // to be fixed
  fetch("/admin/api/charts_total_ordering_sales_by_month", {
      method: "GET",
      headers: {
          "Accepts": "application/json",
          "Content-Type": "application/json"
      }
   })
      .then(res => res.json())
      .then(result => {
        new Chart(adminLineChart2, {
          type: 'line',
          data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [{
              label: '#. of Sales Per Month',
              data: result.map(d => d.total_sales),
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            },
            layout: {
              padding: 50
            }
          }
        });
        
      })
      .catch(err => console.log(err));
}