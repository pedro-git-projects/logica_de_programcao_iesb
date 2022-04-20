/* Faça uma calculadora */
const readline = require('readline')

const inquirer = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let flag : boolean = true
let option : number = 0

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

let a : number = 10
let b : number = 10

inquirer.question("Escolha uma opção", option=> {
     inquirer.close();
  });



console.log("Escolha uma opção:")
console.log(`
			1) para somar
			2) para subtrair
			3) para dividir
			4) para multiplicar
			5) para sair
			`)
while( flag == true ) {
	switch(option) {
		case 1:
			somar(a, b)
			break
		case 2:
			subtrair(a,b)
			break
		case 3:
			divisao(a,b)
			break
		case 4:
			multiplicacao(a, b)
			break
		case 5:
			flag = false
			break
	}
}
