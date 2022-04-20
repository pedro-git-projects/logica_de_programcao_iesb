let aluno = "Pedro"
let notas = [10, 9, 7, 4]
let soma = 0
let media = 0 

function calculaMedia(notas) {
	for(let i = 0; i < notas.length; i++) {
		soma += notas[i]
		media = soma / notas.length
	}
	return media
}

let media2 = calculaMedia(notas)
console.log(media2 + 1)


