import { Campanha } from "./src/models/Campanha.js"
import readline from "readline-sync"

console.log("=== CADASTRO DE FUNCIONARIO ===")

const funci = new Campanha("Blaublau", 50)

console.log("\nTurma atual " + funci.getTurma)
console.log("Atual numero de casacos: " + funci.getCasaco )

console.log("-------------------")

funci.setTurma = readline.question("Digite a nova turma: ")
funci.setCasaco = readline.questionFloat("Informe o novo numero de casaco: ")

console.log("-------------------")

console.log("\nTurma atual " + funci.getTurma)
console.log("Atual numero de casacos: " + funci.getCasaco )

console.log("=====================")