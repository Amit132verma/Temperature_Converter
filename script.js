function convert(type) {
	let fahrenheit = document.getElementById('fahrenheit');
	let celsius = document.getElementById('celsius');
	
	if (type == 'fahrenheit') {
		celsius.value = ((fahrenheit.value - 32) * 5 / 9).toFixed(2);
	} else {
		fahrenheit.value = ((celsius.value * 9 / 5) + 32).toFixed(2);
	}
}
