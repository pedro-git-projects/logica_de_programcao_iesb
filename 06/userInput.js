const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
})

readline.question("insira o nome\n", nome => {
	console.log(nome)
})

