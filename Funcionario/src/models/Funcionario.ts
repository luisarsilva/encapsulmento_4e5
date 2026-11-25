export class Funcionario{
    private nome: string
    private salario: number

    constructor(nome:string, salario: number){
        this.nome = nome
        this.salario = salario
    }

    public get getNome(): string {return this.nome}
    public get getSalario(): number {return this.salario}

    public set setNome(novoNome:string){
        if (novoNome.trim(). length===0){
            console.log("\nERRO!!! O campo não pode ser vazio")
            return
        }
        this.nome = novoNome
    }

    public set setSalario(novoSalario: number){
        if (novoSalario===0) {
            console.log("\nERROR O campo não pode ser vazio")
            return
        }
        this.salario = novoSalario
    }
}