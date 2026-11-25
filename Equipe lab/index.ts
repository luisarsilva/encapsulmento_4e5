import { Equipe } from "./src/models/Equipe.js"
import readline from "readline-sync"

console.log("=== EQUIPES DO LABORATÓRIO ===")

const funci = new Equipe("Blaublau", 2)

console.log("\nBancada atual: " + funci.getBancada)
console.log("Atual numero de Membros: " + funci.getnMembros )

console.log("-------------------")

funci.setBancada = readline.question("Digite a nova bancada: ")
funci.setnMembros = readline.questionFloat("Informe o numero de membros: ")

console.log("-------------------")

console.log("\nBancada atual: " + funci.getBancada)
console.log("Atual equipe: " +  funci.getnMembros + " membros" )

console.log("=====================")