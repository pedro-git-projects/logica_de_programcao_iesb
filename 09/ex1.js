/* Faça um programa que imprima o menor e o maior valor */

const input = require('prompt-sync')({sigint:true})

let numero = Number(input("insira um numero ou 9999 para sair ")) 

let maior = 0 
let menor = 0
let array = []

while(numero != 9999) {
	array.push(numero) // populando o array com o input	

	array.sort((a, b) => a - b) // ordenando o array

	menor = array[0] // menor é o primeiro elemento

 	let lenght = array.length - 1 
	maior = array[lenght] // maior é o último

	numero = Number(input("insira um numero ou 9999 para sair ")) // leia o input 
}

if (maior > 0 || menor > 0) {
	console.log(`maior: ${maior}, menor: ${menor}`)
}
