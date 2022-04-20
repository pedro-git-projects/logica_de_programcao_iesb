const pessoa = {
	nome: "Pedro",
	peso: 110,
	altura: 183
}

for (const chave in pessoa) {
	if (pessoa.hasOwnProperty(chave)) {
		console.log(chave, pessoa[chave])
	}
}
