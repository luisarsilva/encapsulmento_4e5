import { Livro } from "./src/models/Livro.js";
import readline from "readline-sync"

console.log("=== CADASTRO DE LIVRO ===")

const livro = new Livro ("Livro taltal", 5)

console.log("--- Livro atual ---")

console.log("Titulo: " + livro.getTitulo)
console.log(livro.getPaginas + " Paginas")
console.log("-------------------")

livro.setTitulo = readline.question("\nQual o novo nome do livro: ")
livro.setPaginas = readline.questionFloat("Qual o numero de paginas: ")

console.log("-------------------")

console.log("\n=== NOVO LIVRO ===")

console.log("Titulo: " + livro.getTitulo)
console.log(livro.getPaginas + " Paginas")

console.log("=====================")