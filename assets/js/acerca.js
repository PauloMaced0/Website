google.charts.load('current', {
    'packages': ['map'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': ' # Put here your ApiKey '
});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Lat', 'Long', 'Name'],
        [40.633209432187186, -8.65943172674366, 'DETI'],

    ]);
    var options = {
        zoomLevel: 19,
        showTooltip: true,
        showInfoWindow: true,
        useMapTypeControl: true
    };

    var map = new google.visualization.Map(document.getElementById('map_div'));
    map.draw(data, options);
}