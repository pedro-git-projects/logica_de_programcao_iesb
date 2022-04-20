// let matriz = Array.from(Array(5), () => new Array(5)) 

const input = require('prompt-sync')({sigint:true})

let matriz = []



for(i = 1; i <= 5; i++) {
	matriz[i] = []
	for(j = 1; j <= 5; j++) {
		matriz[i][j] = Number(input(`Entre o valor da posição a${i}${j} -> `))
	}
}

console.log(matrix)
