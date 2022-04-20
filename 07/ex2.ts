/* Faça uma calculadora */

let flag : boolean = true
let option : number = 1

function somar(a : number, b : number ) : void {
	console.log(a + b)
}

function subtrair (a : number, b : number ) : void {
	console.log(a - b)
}

function divisao (a : number, b : number ) : void {
	console.log(a / b)
}

function multiplicacao (a : number, b : number ) : void { 
	console.log(a * b) 
}

function mensagem() : void {
	console.log("Escolha uma opção:")
	console.log(`1) para somar
2) para subtrair
3) para dividir
4) para multiplicar
5) para sair
	`)
}


let a : number = 10
let b : number = 10

mensagem()
while( flag === true ) {
	switch(option) {
		case 1:
			console.log("Insira dois números para serem somados:\n")
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
