/******************** EXERCICIO 10 **************************/

const ateFicarMaior = (altura1, taxaDeCrescimento1, altura2, taxaDeCrescimento2) => {
	let ano = 0
	for (ano = 0; altura2 <= altura1; ano++) {
		altura1 += taxaDeCrescimento1
		altura2 += taxaDeCrescimento2
//		console.log("Altura 2: ", altura2)
//		console.log("Altura 1: ", altura1)
	}
	return ano
}

let anacleto = {
	alturaCM: 150,
	taxaDeCrescimentoAno: 2 
}

let felisberto = {
	alturaCM: 110,
	taxaDeCrescimentoAno: 3 
}


let passou = ateFicarMaior(anacleto.alturaCM, anacleto.taxaDeCrescimentoAno, felisberto.alturaCM, felisberto.taxaDeCrescimentoAno)

console.log("Anacleto passará Felisberto após " + passou + " anos, estando com 2m33cm e seu irmão com 2m32cm!")
