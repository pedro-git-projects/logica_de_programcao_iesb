/* Exercicio 1 crie um programa que calcule a média da nota de três alunos */
let aluno : string = "Pedro"
let notas : number[] = [10, 9, 7.5]
let soma : number = 0
let media : number = 0

function calculaMediaEImprime(notas : number[]) : void {
	for(let i = 0; i < notas.length; i++) {
		soma += notas[i]
		media = soma / notas.length
	}
	console.log(media.toFixed(2))
}

calculaMediaEImprime(notas)

/* Exercicio 2 crie um programa que calcule a área do círculo */
function calcularArea(raio : number) : number{
	return Math.PI * (Math.pow(raio, 2)) 
}

let raio : number = 13
console.log(calcularArea(raio).toFixed())


/* Exercicio 3 crie um programa que além de calular aprove ou reprove o aluno */

function aprovadoOuReprovado(media : number) : void {
	if(media >= 5) {
		console.log("Aprovado!")
	} else if (media >= 3 && media < 5) {
		console.log("Recuperação!")
	} else {
		console.log("Reprovado!")
	}
}

function calculaMedia(notas : number[]) : number {
	for(let i = 0; i < notas.length; i++) {
		soma += notas[i]
		media = soma / notas.length
	}
	return media
}

let novaMedia = calculaMedia(notas)
aprovadoOuReprovado(novaMedia)

/* Ex 4 crie um programa que calcule o delta */

function calcularDelta(b:number, a:number, c:number) : number {
	return (Math.pow(b,2) - (4 * a * c))
}

let a : number = 2
let b : number = 3
let c : number = 5

let delta = calcularDelta(a, b, c)
console.log(delta.toFixed(2))
