/* Programa que calcula aumento salarial */
//TODO: descobrir porque está repetindo a entrada.

const input = require('prompt-sync')({sigint:true})
let salario 
let aumento 
let opcao
let flag = true

salario = Number(input("Insira o salário a receber o aumento -> "))

function testarOpcao(opcao) {
	switch(opcao) {
		case (1): {
			salario = ((15/100)*salario) + salario	
			console.log(salario)
			break
		}
		case (2): {
			salario = ((10/100)*salario)+salario	
			console.log(salario)
			break
		}
		case (3): {
			salario = ((7/100)*salario)+salario	
			console.log(salario)
			break
		}
		case (4): {
			aumento = Number(input(`Escolha o valor do aumento -> `))
			salario = ((aumento/100)*salario)+salario
			console.log(salario)
			break
		}
		case (5): {
			break
		}
		default: {
			console.log("Insira a entrada correta ")
		}
	}
} 

function mudaFlag() {
	if(opcao === 1 || opcao === 2 || opcao === 3 || opcao === 5) {
		flag = false
	}
}

function pergunta() {
	opcao = Number(input(`Escolha uma opção para calcular o aumento:
	1 - Aumento de 15%
	2 - Aumento de 10%
	3 - Aumento de 7%
	4 - Percentual customizado 
	5 - sair 
	`))
}

while(flag === true) {
	pergunta()
	testarOpcao(opcao)
	mudaFlag()
}
