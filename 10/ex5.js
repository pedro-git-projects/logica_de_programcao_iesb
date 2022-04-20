const input = require('prompt-sync')({sigint:true})

let estado = input("Insira a sigla do seu estado -> ").toUpperCase()

switch(estado) {
	case("MG"):
		console.log("Mineiro")
		break
	case("RJ"):
		console.log("Carioca")
		break
	case("SP"):
		console.log("Paulista")
		break
	default:
		console.log("outro")
		break
}
