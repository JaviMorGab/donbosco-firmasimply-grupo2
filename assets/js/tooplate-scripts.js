const width_threshold = 480;

function drawLineChart() {
  if ($("#lineChart").length) {
    ctxLine = document.getElementById("lineChart").getContext("2d");
    optionsLine = {
      scales: {
        yAxes: [
          {
            scaleLabel:  {
              display: true,
              labelString: "Número de Alumnos",
            }
          }
        ]
      }
    };
    // Set aspect ratio based on window width
    optionsLine.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;
    configLine = {
      type: "line",
      data: {
        labels: [
          "Lunes",
          "Martes",
          "Miercoles",
          "Jueves",
          "Viernes",
        ],
        datasets: [
          {
            label: "Asistencias",
            data: [1, 2, 3, 4, 6, 7, 8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            cubicInterpolationMode: "monotone",
            pointRadius: 5
          }
        ]
      },
      options: optionsLine
    };

    lineChart = new Chart(ctxLine, configLine);
  }
}
function updateLineChart() {
  if (lineChart) {
    lineChart.options = optionsLine;
    lineChart.update();
  }
}

function updateBarChart() {
  if (barChart) {
    barChart.options = optionsBar;
    barChart.update();
  }
}
