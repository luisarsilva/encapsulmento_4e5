import { Funcionario } from "./src/models/Funcionario.js";
import readline from "readline-sync"

console.log("=== CADASTRO DE FUNCIONARIO ===")

const funci = new Funcionario("Blaublau", 50)

console.log("\nNome do Funcionario atual" + funci.getNome)
console.log("Atual salario" + " R$" + funci.getSalario )

console.log("-------------------")

funci.setNome = readline.question("Digite o novo nome do funcionário: ")
funci.setSalario = readline.questionFloat("Informe o salario: ")

console.log("-------------------")

console.log("\nNome atual" + funci.getNome)
console.log("Atual salario" + " R$" + funci.getSalario )

console.log("=====================")