/* Laço for */

const input = require('prompt-sync')({sigint:true})

let numero = Number(input("insira um numero ou 9999 para sair ")) 
let myArr = []

while(numero != 9999) {
	myArr.push(numero)
	numero = Number(input("insira um numero ou 9999 para sair ")) 
}

for(let i = 0; i < myArr.length; i++) {
	console.log(myArr[i])
}

for(let i = myArr.length - 1; i >= 0; i--) {
	console.log(myArr[i])
}

