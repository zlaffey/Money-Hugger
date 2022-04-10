const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
	type: "bar",
	data: {
		labels: [],
		datasets: [
			{
				data: [],
				backgroundColor: "#198754",
				borderColor: "#198754",
				borderWidth: 1,
			},
		],
	},
	options: {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
		legend: {
			display: false,
		},
	},
});

document.querySelector("#logSubmit").addEventListener("click", updateLog);

function createDataItem(data) {
	let td = document.createElement("td");
	td.textContent = `${data}`;
	return td;
}

function addData(chart, label, data) {
	chart.data.labels.push(label);
	chart.data.datasets.forEach((dataset) => {
		dataset.data.push(data);
	});
	chart.update();
}

let dataSets = [];

function updateLog() {
	const log = document.querySelector("#netWorthLog");
	let dateData = document.querySelector("#date").value;
	let cashInput = Number(document.querySelector("#cashInput").value);
	let savingsInput = Number(document.querySelector("#savingsInput").value);
	let investmentInput = Number(
		document.querySelector("#investmentInput").value
	);
	let debtInput = Number(document.querySelector("#debtInput").value);
	let netWorth = Number(cashInput + savingsInput + investmentInput - debtInput);

	let newRow = document.createElement("tr");
	newRow.appendChild(createDataItem(dateData));
	newRow.appendChild(createDataItem("$" + cashInput));
	newRow.appendChild(createDataItem("$" + savingsInput));
	newRow.appendChild(createDataItem("$" + investmentInput));
	newRow.appendChild(createDataItem("$" + debtInput));
	newRow.appendChild(createDataItem("$" + netWorth));

	log.prepend(newRow);

	document.querySelector("#date").value = "";
	document.querySelector("#cashInput").value = "";
	document.querySelector("#savingsInput").value = "";
	document.querySelector("#investmentInput").value = "";
	document.querySelector("#debtInput").value = "";

	addData(myChart, dateData, netWorth);

	let dataPoint = {
		id: dateData,
		cash: cashInput,
		savings: savingsInput,
		investments: investmentInput,
		debts: debtInput,
	};
	dataSets.push(dataPoint);

	console.log(dataSets);
}
