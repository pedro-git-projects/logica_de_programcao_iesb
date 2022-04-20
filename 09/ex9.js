const input = require('prompt-sync')({sigint:true})

let entrada 
let flag = true

while(flag) {
	entrada = (input("Digite verde, vermelho ou amaerlo -> ")).toLowerCase() 
	testarEntrada(entrada)
	mudaFlag()	
}

function testarEntrada(entrada) {
	switch(entrada) {
		case("verde"): {
			console.log("Pode passar!")
			break
		}
		case("vermelho"): {
			console.log("Não pode passar!")
			break
		}
		case("amarelo"): {
			console.log("Atenção...")
			break
		}
		default: {
			console.log("Insira a entrada correta ")
		}
	}
} 

function mudaFlag() {
	if(entrada == "verde" || entrada == "vermelho" || entrada == "amarelo") {
		flag = false
	}
}
