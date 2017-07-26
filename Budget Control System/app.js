function calculatenet() {
	
	var salary = parseFloat(document.getElementById("salary").value);

	var carfuel = parseFloat(document.getElementById('carfuel').value);
	var carrepair = parseFloat(document.getElementById('carrepair').value);

	var waterbill = parseFloat(document.getElementById('waterbill').value);
	var electricbill = parseFloat(document.getElementById('electricbill').value);

	var restaurantexpenses = parseFloat(document.getElementById('restaurantexpenses').value);
	var grocerybill = parseFloat(document.getElementById('grocerybill').value);

	var homemaintenance = parseFloat(document.getElementById('homemaintenance').value);
	var homecleaning = parseFloat(document.getElementById('homecleaning').value);

	var bankfees = parseFloat(document.getElementById('bankfees').value);
	var creditcardfees = parseFloat(document.getElementById('creditcardfees').value);

	var gymmembership = parseFloat(document.getElementById('gymmembership').value);
	var dietarysupplements = parseFloat(document.getElementById('dietarysupplements').value);

	var moviecosts = parseFloat(document.getElementById('moviecosts').value);
	var videogamecosts = parseFloat(document.getElementById('videogamecosts').value);

	var totalincome = salary;
	var totalexpenses = carfuel + carrepair + waterbill + electricbill + restaurantexpenses + grocerybill + homemaintenance + homecleaning + bankfees + creditcardfees + gymmembership + dietarysupplements + moviecosts + videogamecosts
	var yearlynet = totalincome - totalexpenses;
	var monthlynet = yearlynet / 12;
	var weeklynet = monthlynet / 4;

	document.getElementById("totalincome").innerHTML = "Your total income is: $" + totalincome;
	document.getElementById("totalexpenses").innerHTML = "Your total expenses are: $" + totalexpenses;
	document.getElementById("yearlynet").innerHTML = "The yearly net is: $" + yearlynet;
	document.getElementById("monthlynet").innerHTML = "The monthly net is: $" + monthlynet;
	document.getElementById("weeklynet").innerHTML = "The weekly net is: $" + weeklynet;
}