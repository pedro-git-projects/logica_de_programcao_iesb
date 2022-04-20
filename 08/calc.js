/* Faça uma calculadora */
const prompt = require('prompt-sync')({sigint:true})

let flag = true
let option = 0


function somar(a , b ) {
	console.log(a + b)
}

function subtrair (a , b ) {
	console.log(a - b)
}

function divisao (a , b ) {
	console.log(a / b)
}

function multiplicacao (a , b ) { 
	console.log(a * b) 
}



while( flag === true ) {

	option = prompt(`Escolha uma opção: 	
1) para somar
2) para subtrair
3) para dividir
4) para multiplicar
5) para sair	
	`)

	switch(option) {
		case 1:
			a = prompt("insira o primero numero")
			b  = prompt("insira o segundo numero")
		somar(a, b)
		option = 0
		break
		case 2:
			console.log("Insira dois números para serem subtraidos:\n")
		subtrair(a,b)
		option = 0
		break
		case 3:
			console.log("Insira dois números para serem divididos:\n")
		divisao(a,b)
		option = 0
		break
		case 4:
			console.log("Insira dois números para serem multiplicados:\n")
		multiplicacao(a, b)
		option = 0
		break
		case 5:
			flag = false
		option = 0
		break
	}	
}
