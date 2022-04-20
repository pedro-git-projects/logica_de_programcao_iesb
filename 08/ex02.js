const input = require('prompt-sync')({sigint:true})
const input2 = require('prompt-sync')({sigint:true})


let num1 = input("Insira primeiro numero ")
let num2 = input2("Insira segundo numero ")

while(num2 == 0) {
	num2 = input2("Insira o segundo numbero")
}
if (num2 != 0) {
	console.log(num1/num2)
}
