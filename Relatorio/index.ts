import { Relatorio } from "./src/models/Relatorio.js"
import readline from "readline-sync"

console.log("=== RELATORIO DE CENSO ===")

const rela = new Relatorio (88, 5)

console.log("--- relatorio atual ---")

console.log("Codigo da instituição: " + rela.getCodInst)
console.log(`Total de alunos: ${rela.getTotalAlu}`)
console.log("-------------------")

rela.setCodInst = readline.questionFloat("\nQual o novo codigo da instituição: ")
rela.setTotalAlu = readline.questionFloat("Qual o total de alunos: ")

console.log("-------------------")

console.log("\n=== NOVO relatorio ===")

console.log("Codigo da instituição: " + rela.getCodInst)
console.log(`Total de alunos: ${rela.getTotalAlu}`)

console.log("=====================")