/* Crie um programa que leia a entrada numérica e saia com 9999 */

const input = require('prompt-sync')({sigint:true})

let numero = Number(input("insira um numero ou 9999 para sair ")) 
let par = 0
let impar = 0

while(numero != 9999) {
		if(numero % 2 == 0) {
			par++
		} else {
			impar ++
		}
	numero = Number(input("Insira um numero ou 9999 para sair "))
}

if (par > 0 || impar > 0) {
	console.log(`Par: ${par}, Impar ${impar}`)
}
