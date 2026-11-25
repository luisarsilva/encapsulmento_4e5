export class Campanha{
    private turma: string
    private casaco: number

    constructor(turma:string, Casaco: number){
        this.turma = turma
        this.casaco = Casaco
    }

    public get getTurma(): string {return this.turma}
    public get getCasaco(): number {return this.casaco}

    public set setTurma(novoTurma:string){
        if (novoTurma.trim(). length===0){
            console.log("\nERRO!!! O campo não pode ser vazio")
            return
        }
        this.turma = novoTurma
    }

    public set setCasaco(novoCasaco: number){
        if (novoCasaco===0) {
            console.log("\nERROR O campo não pode ser vazio")
            return
        }
        this.casaco = novoCasaco
    }
}