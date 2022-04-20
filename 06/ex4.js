function calcularDelta(b, a, c) {
	return (Math.pow(b, 2) - (4 * a * c)).toFixed(2)
}

let b = 9
let a = 1 
let c = 2


console.log(calcularDelta(b, a, c))
