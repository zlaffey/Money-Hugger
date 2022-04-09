// Graphs
let ctx = document.getElementById("myChart");
// eslint-disable-next-line no-unused-vars
let myChart = new Chart(ctx, {
	type: "bar",
	data: {
		labels: [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		],
		datasets: [
			{
				data: [1, 2, 3, 4, 5, 6, 7],
				lineTension: 0,
				backgroundColor: "#007bff",
				borderColor: "#007bff",
				borderWidth: 3,
				pointBackgroundColor: "#007bff",
			},
		],
	},
	options: {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: false,
					},
				},
			],
		},
		legend: {
			display: false,
		},
	},
});
