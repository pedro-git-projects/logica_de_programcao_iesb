const input = require('prompt-sync')({sigint:true})

let nome = input("Insira seu nome -> ")
let sexo = Number(input("Insira 1 para feminino 2 para masculino -> "))
let idade = Number(input("Insira sua idade -> "))

if(sexo == 1 && idade < 25) {
	console.log(nome, " aceita")
} else {
	console.log("Não aceita")
}
