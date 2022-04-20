const input = require('prompt-sync')({sigint:true})
let flag = true

let num1 = input("Insira primeiro numero ")

while(flag == true) {
	if(num1 <= 5) {
		num1 = input("Insira um numero ")
	} else {
		console.log("Maior que 5!")
		flag = false
	}
}

/*
do {
	num1 = input("Insira primeiro numero ")
} while(num1 <= 5) 
*/
