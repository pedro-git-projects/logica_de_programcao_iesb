const input = require('prompt-sync')({sigint:true})

let numArray = []
let dentro = 0
let fora = 0

for(let i = 0; i < 10; i++) {
	let numero = Number(input(`Insira o ${i+1} número: `)) 
	numArray.push(numero)
}

for(let i = 0; i < 10; i++) {
	if(numArray[i] >= 10 && numArray[i] <= 20) {
		dentro++
	} else {
		fora++
	}
}

if(dentro + fora >= 0) {
	console.log(`${dentro} números estavam dentro do intervalo [10, 20]
${fora} números estavam fora`)
}
