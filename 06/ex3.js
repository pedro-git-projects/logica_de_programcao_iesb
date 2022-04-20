let aluno = "Pedro"
let notas = [10, 9, 7]
let soma = 0
let media = 0 

for(let i = 0; i < notas.length; i++) {
	soma += notas[i]
	media = soma / notas.length 
}

function aprovado(media) {
	if(media >= 5) {
		console.log("Aprovado!")
	} else if (media >= 3 && media < 5) {
		console.log("Recuperação!")
	} else {
		console.log("Reprovado!")
	}
}

aprovado(media)
