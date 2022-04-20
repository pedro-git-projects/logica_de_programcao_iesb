/* Programa para imprimir um array de notas */

const input = require('prompt-sync')({sigint:true})

let nota = Number(input("insira uma nota ou 9999 para sair ")) 
let notas = []

while(nota != 9999) {
	notas.push(nota)	
	nota = Number(input("insira uma nota ou 9999 para sair ")) 
}

for(let i = 0; i < notas.length; i++) {
	console.log(`nota ${i+1}: ${notas[i]}`)
}
