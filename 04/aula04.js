/* Mathematical methods */
power = Math.pow(2, 5)
console.log(power)

notAnError = 7/0

function isArithmeticError(input) {
	if (input === Infinity || input === NaN) {
		console.log("Not possible to divide by zero")
	}
}

console.log(isArithmeticError(notAnError))

/* Strings ar char arrays */
myString = "Pedro"
console.log(myString[2])

