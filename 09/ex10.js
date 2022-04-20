const input = require('prompt-sync')({sigint:true})

let a = Number(input("Entre o primeiro número -> ")) 
let b = Number(input("Entre o segundo número -> ")) 

encontraMaiorIgualInvalido(a, b)

function encontraMaiorIgualInvalido(a, b) {
	if(a > b) {
		console.log("O primeiro número é maior")
	} else if(b > a) {
		console.log("O sengundo número é maior")
	} else if (a === b) {
		console.log("Eles são iguais")
	} else {
		console.log("Entrada inválida")
	}
}


