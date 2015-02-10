function doubleAll(numbers) {
	numbers.map(function (value, index, array) {
		return 2*value;
	});
	return numbers.map;
}

module.exports = doubleAll;