import { Jogo } from "./src/models/Jogo.js"
import readline from "readline-sync"

console.log("=== INFORMAÇÕES DO JOGO ===")

const jogo = new Jogo ("jogo taltal", 5)

console.log("--- jogo atual ---")

console.log("Titulo: " + jogo.getTitulo)
console.log("R$ " + jogo.getPreco)
console.log("-------------------")

jogo.setTitulo = readline.question("\nQual o novo nome do jogo: ")
jogo.setPreco = readline.questionFloat("Qual o preço do jogo: ")

console.log("-------------------")

console.log("\n=== NOVO jogo ===")

console.log("Titulo: " + jogo.getTitulo)
console.log("R$ " + jogo.getPreco)

console.log("=====================")