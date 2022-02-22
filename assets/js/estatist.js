google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Música/Artista", "Reproduções", { role: "style" }],
        [" Someone You Loved (Lewis Capaldi)", 2.188, "black"],
        [" Rockstar \n(Post Malone)", 2.315, "#00c448"],
        ["Dance Monkey \n (Tones and I)", 2.431, "black"],
        ["Bliding Lights (The Weeknd) ", 2.688, " #00c448"],
        ["Shape Of You (Ed Sheeran)", 2.995, " black"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2
    ]);

    var options = {
        title: "Nº de Reproduções, em Milhões",
        width: 800,
        height: 600,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart.draw(view, options);
}


google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawdonut);

function drawdonut() {
    var data = google.visualization.arrayToDataTable([
        ['Região', 'Nº de Serviços Premium(em milhões)'],
        ['Europa', 152.4, ],
        ['América do Norte', 110.49],
        ['América Latina', 76.2],
        ['Resto Mundo', 41.91],
    ]);

    var options = {
        title: 'Distribuição dos serviços Premium (em milhões)',
        pieHole: 0.4,
        colors: ['#00c448', '#019b32', '#017526', '#00da50']
    };

    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}