const input = require('prompt-sync')({sigint:true})

let a = Number(input("Entre o primeiro número -> ")) 
let b = Number(input("Entre o segundo número -> ")) 
let c = Number(input("Entre o segundo número -> ")) 

encontraMaiorIgualInvalido(a, b, c)

function encontraMaiorIgualInvalido(a, b, c) {
	if(a > b && a > c) {
		console.log(`O maior número é ${a}`)
	} else if(b > a && b > c) {
		console.log(`O maior número é ${b}`)
	} else if (c > a && c > b) {
		console.log(`O maior número é ${c}`)
	}
	else if (a === b && b === c) {
		console.log("Eles são iguais")
	} else {
		console.log("Entrada inválida")
	}
}

