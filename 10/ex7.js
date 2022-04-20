const input = require('prompt-sync')({sigint:true})

let num = Number(input("Insira um número -> "))

function getAntSuc(num) {
	console.log(`Número -> ${num}
Sucessor -> ${num+1}
Antecessor -> ${num-1}`)
}

getAntSuc(num)
