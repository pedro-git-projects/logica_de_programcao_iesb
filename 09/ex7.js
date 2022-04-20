const input = require('prompt-sync')({sigint:true})

let numero = Number(input("insira 10 números ou 9999 para sair ")) 
let dentro = 0
let fora = 0
let faltando = 9

while(numero != 9999) {

	if (faltando == 0) {
		break
	}

	if(numero >= 10 && numero <= 20) {
		dentro++
	} else {
		fora++
	}

 	numero = Number(input(`${faltando} números faltando, insira ou pressione 9999 para sair `)) 
	faltando--
}

if(dentro + fora >= 0) {
	console.log(`${dentro} números estavam dentro do intervalo [10, 20]
${fora} números estavam fora`)
}
