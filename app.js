function calculatenet() {

	var values = [0,
		0,
		0,
		0,
		0,
		0,
		0
	];

	var salary = parseFloat(document.getElementById("salary").value);
	values[0] = salary;

	var carfuel = parseFloat(document.getElementById('carfuel').value);
	var carrepair = parseFloat(document.getElementById('carrepair').value);
	values[1] = carfuel + carrepair;

	var waterbill = parseFloat(document.getElementById('waterbill').value);
	var electricbill = parseFloat(document.getElementById('electricbill').value);
	values[2] = waterbill + electricbill;

	var restaurantexpenses = parseFloat(document.getElementById('restaurantexpenses').value);
	var grocerybill = parseFloat(document.getElementById('grocerybill').value);
	values[3] = restaurantexpenses + grocerybill;

	var homemaintenance = parseFloat(document.getElementById('homemaintenance').value);
	var homecleaning = parseFloat(document.getElementById('homecleaning').value);
	values[4] = homemaintenance + homecleaning;

	var bankfees = parseFloat(document.getElementById('bankfees').value);
	var creditcardfees = parseFloat(document.getElementById('creditcardfees').value);
	values[5] = bankfees + creditcardfees;

	var gymmembership = parseFloat(document.getElementById('gymmembership').value);
	var dietarysupplements = parseFloat(document.getElementById('dietarysupplements').value);
	values[6] = gymmembership + dietarysupplements;

	var moviecosts = parseFloat(document.getElementById('moviecosts').value);
	var videogamecosts = parseFloat(document.getElementById('videogamecosts').value);
	values[7] = moviecosts + videogamecosts;

	var totalincome = salary;
	var totalexpenses = carfuel + carrepair + waterbill + electricbill + restaurantexpenses + grocerybill + homemaintenance + homecleaning + bankfees + creditcardfees + gymmembership + dietarysupplements + moviecosts + videogamecosts
	var yearlynet = totalincome - totalexpenses;
	var monthlynet = yearlynet / 12;
	var weeklynet = monthlynet / 4;
	getPercentages(values, totalexpenses);

	document.getElementById("totalincome").innerHTML = "Your total income is: $" + totalincome;
	document.getElementById("totalexpenses").innerHTML = "Your total expenses are: $" + totalexpenses;
	document.getElementById("yearlynet").innerHTML = "The yearly net is: $" + yearlynet;
	document.getElementById("monthlynet").innerHTML = "The monthly net is: $" + monthlynet;
	document.getElementById("weeklynet").innerHTML = "The weekly net is: $" + weeklynet;
	renderPieChart(values);
}

function getPercentages(values, total) {
	document.getElementById("warning").innerHTML = "";
	var percentage;


	for (var i = 1; i < values.length; i++) {
		percentage = (values[i] / total) * 100;
		if (percentage >= 50) {
			document.getElementById("warning").innerHTML = "You have an expense exceeding 50% of your total expenses.";
			return;
		}
	}
	return;
}

function renderPieChart(values) {
	google.charts.load('current', {
		'packages': ['corechart']
	});
	google.charts.setOnLoadCallback(drawChart);

	function drawChart() {

		var data = google.visualization.arrayToDataTable([
			['Expense Name', 'Value'],
			['Auto and Transport', values[1]],
			['Bills and Utilites', values[2]],
			['Food and Dining', values[3]],
			['Home', values[4]],
			['Cash and ATM', values[5]],
			['Health and Fitness', values[6]],
			['Entertainment', values[7]]
		]);

		var options = {
			title: 'Expenses'
		};

		var chart = new google.visualization.PieChart(document.getElementById('piechart'));

		chart.draw(data, options);
	}
}