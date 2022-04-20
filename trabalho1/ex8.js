/******************** EXERCICIO 8 **************************/

function retornaMaiorNumero(n1, n2, n3) {
	return Math.max(n1, n2, n3)
}

const input1 = require('prompt-sync')({sigint:true})
const input2 = require('prompt-sync')({sigint:true})
const input3 = require('prompt-sync')({sigint:true})

const num1 = input1("Insira o primeiro número ")
const num2 = input2("Insira o segundo número ")
const num3 = input3("Insira o terceiro número ")

console.log(num1, num2, num3)

console.log("O maior número é ", retornaMaiorNumero(num1, num2, num3))
