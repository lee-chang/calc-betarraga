var barchart = document.getElementById("bar-chart").getContext("2d");
var pastelchart = document.getElementById("pastel-chart").getContext("2d");

//canvas Flowchart

var canvas= document.getElementById("flowchart")
canvas.width = 500;
canvas.height = 400;
var ctx = canvas.getContext("2d");
dibujarEnElCanvas(ctx);

function dibujarEnElCanvas (ctx){
    var img = new Image();
    img.src = 'img/flowchart.png';
    img.onload = function(){
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
}


// Single Bar Chart
//DATA

const databar = {
    labels: ["Uno", "Dos", "Tres"],
    datasets: [{
        label:"indefinido",
        data: [ 0,0,0],
        backgroundColor: [
            "rgba(0, 156, 255, .7)",
            "rgba(0, 156, 255, .6)",
            "rgba(0, 156, 255, .5)"
        ],
            
    }]
}

const datapastel= {
    labels: ["indefinido", "indefinido"],
    datasets: [{
        data: [0, 0],
        backgroundColor: [
            "rgba(0, 156, 255, .7)",
            "rgba(0, 156, 255, .3)"
        ]
        
    }]
}


//CONFIG
const configbar = {
    type: 'bar',
    data: databar,
    options: {
        scales:{
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
    }
}

const configpastel = {
    type: 'pie',
    data: datapastel,
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
}

//RENDEER

const myChart1 = new Chart(
    document.getElementById('bar-chart'),
    configbar
)
const myChart2 = new Chart(
    document.getElementById('pastel-chart'),
    configpastel
)



function updateBarChart (arr) {
    myChart1.data.labels = ["Extracción", "Deshidratación", "Total"];
    myChart1.data.datasets = [{
        label: 'Vapor',
        data: arr,
        backgroundColor: [ 
            "rgba(0, 156, 255, .3)",
            "rgba(0, 156, 255, .6)",
            "rgba(0, 156, 255, .9)"]
    }];
    myChart1.update();
}

function updatePastelChart (arr) {

    myChart2.data.labels = ["Materia Prima de Betarraga", "Solución Acuosa de Betarraga",];
    myChart2.data.datasets = [{
        data: arr,
        backgroundColor: [ 
            "rgba(0, 156, 255, .3)",
            "rgba(0, 156, 255, .9)"]
    }];
    myChart2.update();
}
