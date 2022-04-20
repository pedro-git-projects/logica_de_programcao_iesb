const input = require('prompt-sync')({sigint:true})

let numero = Number(input("insira 10 números ")) 
let dentro = 0
let fora = 0
let faltando = 9

while(faltando != 0) {

	if(numero >= 10 && numero <= 20) {
		dentro++
	} else {
		fora++
	}

	numero = Number(input(`${faltando} números faltando, insira: `)) 
	faltando--
}

if(dentro + fora >= 0) {
	console.log(`${dentro} números estavam dentro do intervalo [10, 20]
${fora} números estavam fora`)
}

