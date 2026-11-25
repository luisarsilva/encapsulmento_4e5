import { Ingresso } from "./src/models/Ingresso.js"
import readline from "readline-sync"

console.log("=== CADASTRO DE FILMINHO YAY ===")

const funci = new Ingresso("Blaublau", 100)

console.log("\nFilme atual: " + funci.getFilme)
console.log("Atual assento: " + funci.getAssento )

console.log("-------------------")

funci.setFilme = readline.question("Digite o novo Filme: ")
funci.setAssento = readline.questionFloat("Informe o assento: ")

console.log("-------------------")

console.log("\n=== FILMINHO CADASTRADO YAY ===")

console.log("Filme atual: " + funci.getFilme)
console.log("Atual assento: " + funci.getAssento )

console.log("=====================")