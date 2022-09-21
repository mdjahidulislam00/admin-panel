const ctx = document.getElementById('lineChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Api', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Earning Value',
            data: [4000, 50000, 30000, 598743, 209543, 37985, 8580, 94859,98237,3487,89237, 72983, 3982],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
     responsive: true
    }
});

const doughnutChart= document.getElementById('doughnutChart').getContext('2d');
const myChart1 = new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [{
            label: 'Emploly value',
            data: [30000, 50000, 80000],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(34, 199, 133)',
                'rgba(255, 199,55)'
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
     responsive: true
    }
});

const barChart= document.getElementById('barChart').getContext('2d');
const myChart2 = new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar','Api'],
        datasets: [{
            label: 'Employee value',
            data: [30000, 50000, 80000, 60000],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(34, 199, 133)',
                'rgba(255, 199,55)',
                'rgba(153, 102, 255, 1)'
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
     responsive: true
    }
});