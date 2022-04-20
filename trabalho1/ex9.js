/******************** EXERCICIO 9 **************************/

let myArray = [3, 12, 4, 15, 1 , 2, 7, 8]

function imprimeDoisMaiores(array) { 
	var max = Math.max.apply(null, array) /* Encontrando o maior elemento */ 
	console.log("Maior elemento:", max)

	array.splice(array.indexOf(max), 1) /* Excluindo o maior elemento do array */ 

	console.log("Segundo maior elemento:", Math.max.apply(null, array)) /* Encontrando e imprimindo o próximo maior */ 
}


imprimeDoisMaiores(myArray)

