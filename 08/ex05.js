/* Crie um programa que leia a entrada numérica e saia com 9999 */

const input = require('prompt-sync')({sigint:true})

let notas = Number(input("insira as notas ou 9999 para sair ")) 
let soma = 0
let i = 0
let media = 0

while(notas != 9999) {
		soma += notas
		notas = Number(input("insira as notas ou 9999 para sair ")) 
		i++
		media = soma/i
}

if (i > 0) {
	console.log(`A média foi: ${media}
O programa foi repetido ${i} vezes`)
}

