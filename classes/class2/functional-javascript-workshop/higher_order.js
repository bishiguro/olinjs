function repeat(operation, num) {
	//for (var i = 0; i < num; i++) { operation() };
	if (num <= 0) return;
	operation();
	repeat(operation, num-1)
}

module.exports = repeat;