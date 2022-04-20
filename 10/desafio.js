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

let matriz = []
let linhas = 5
let colunas = 5
let linhaParaSomar = 3
let colunaParaSomar = 1

for(i = 0; i < linhas; i++) {
	matriz[i] = []
	for(j = 0; j < colunas; j++) { matriz[i][j] = Number(input(`Entre o valor da posição a${i+1}${j+1} -> `)) }
}


/* Letra a) */ console.log(matriz)

/* Letra b) */
let flattenedMatriz = [].concat(...matriz) // amassando o array para poder reduzir
let soma = flattenedMatriz.reduce((a, b) => a + b, 0) // reduzindo o array
console.log(`A soma de todos os elementos é ${soma}`) // imprimindo a soma

/* Letra c) */
let somaLinha = 0
for(i = 0; i < colunas; i++) {
	somaLinha += matriz[linhaParaSomar][i]
}
console.log(`A soma da linha ${linhaParaSomar+1} é ${somaLinha}`)

/* Letra d) */
let somaColuna = 0
for(i = 0; i < linhas; i++) {
	somaColuna += matriz[i][colunaParaSomar]
}
console.log(`A soma da coluna ${colunaParaSomar+1} é ${somaColuna}`)

/* letra e) */
let diagonalPrincipal = 0
for(i = 0; i < linhas; i++) {
	diagonalPrincipal += matriz[i][i]
}
console.log(`A soma da diagonal principal é: ${diagonalPrincipal}`)

/* letra f) */
let diagonalSecundaria = 0
for(let i = 0; i < matriz.length; i++){
	diagonalSecundaria += matriz[matriz.length -1 - i][i]
}
console.log(`A soma da diagonal secundária é: ${diagonalSecundaria}`)
