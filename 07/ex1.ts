let notas : number[]

function calculaMedia(notas : number[]) : number {
	let media : number = 0
	let soma : number = 0
	for(let i = 0; i < notas.length; i++) {
		 soma += notas[i]
		 media = soma / notas.length
	}
	return media
}
/* O valor tem que ser exato não conta o intervalo */
function resultado(media : number) : string {
	switch(media) {
		case 9: case 10:
			return "Espertalhão"	
		case 8: case 7: case 6: case 5:
			return "Passou"	
		case 4: case 3:
			return "Recuperação"
		case 2: case 1:
			return "Reprovado"
		default:
			return "Sem nota"
	} 
}

notas = [10, 10, 5, 5, 5]
let minhaMedia : number = calculaMedia(notas)
let meuResultado : string = resultado(minhaMedia)
console.log(meuResultado)
