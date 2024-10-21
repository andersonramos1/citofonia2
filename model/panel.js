google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
      var data = google.visualization.arrayToDataTable([
        ['Día', 'Llamadas', 'Audios'],
        ['Lunes', 150, 100],
        ['Martes', 170, 110],
        ['Miércoles', 160, 120],
        ['Jueves', 180, 130],
        ['Viernes', 200, 140],
        ['Sábado', 130, 90],
        ['Domingo', 120, 80]
      ]);

      var options = {
        title: 'Llamadas y Audios por Día de la Semana',
        chartArea: {width: '60%'},
        hAxis: {
          title: 'Cantidad',
          minValue: 0
        },
        vAxis: {
          title: 'Día'
        },
        colors: ['#20A8D8', '#FF5733'], // Colores para las llamadas y los audios
        backgroundColor: '#fff', // Fondo del gráfico
        legend: { position: 'top' }, // Leyenda en la parte superior
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      chart.draw(data, options);
}
