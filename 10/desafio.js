/* 
 **********  DESAFIO  **********  
Escreva um algoritmo que leia uma matriz M(5,5) e mostre o que se pede:
	a) Mostre todos os elementos da matriz;
	b) Somatório total da matriz
	c) Somatório total da linha 4 de M;
	d) Somatório total da coluna 2 de M;
	e) Somatório total da diagonal principal (linha = coluna);
	f) Somatório total da diagonal secundária (linha + coluna) = (total da matriz -1);
*/

const input = require('prompt-sync')({sigint:true})

let linhas1 = []
let linhas2 = []
let linhas3 = []
let linhas4 = []
let linhas5 = []
let count = 0

/* Cria uma matrix 5x5 vazia */
let matriz = Array.from(Array(5), () => new Array(5)) 
console.log(matriz)
/* Guarda a linha atual da matriz */
let linha = 1

function setLinhas(linhas) {
	for(i = 0; i < 5; i++) {
		const linhaInput = Number(input(`Entre o elemento a${linha}${i+1} -> `))
		linhas.push(linhaInput)
	} 
	linha++
	return linhas
}

while(count < 5 ) {
	switch(count) {
		case(0):
			linhas1 = setLinhas(linhas1)	
			count++
		case(1):
			linhas2 = setLinhas(linhas2)	
			count++
		case(2):
			linhas3 = setLinhas(linhas3)
			count++
		case(3):
			linhas4 = setLinhas(linhas4)
			count++
		case(4):
			linhas5 = setLinhas(linhas5)
			count++
		case(5):
			break
	}
}

 matriz = [
 	[linhas1[0],  linhas1[1], linhas1[2], linhas1[3], linhas1[4] ],
 	[linhas2[0],  linhas2[1], linhas2[2], linhas2[3], linhas2[4]],
 	[linhas3[0],  linhas3[1], linhas3[2], linhas3[3], linhas3[4]],
 	[linhas4[0],  linhas4[1], linhas4[2], linhas4[3], linhas4[4]],
 	[linhas5[0],  linhas5[1], linhas5[2], linhas5[3], linhas5[4]]
 ]

console.log(matriz)
