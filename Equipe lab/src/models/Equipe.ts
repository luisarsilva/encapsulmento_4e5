export class Equipe{
    private bancada: string
    private nMembros: number

    constructor(bancada:string, nMembros: number){
        this.bancada = bancada
        this.nMembros = nMembros
    }

    public get getBancada(): string {return this.bancada}
    public get getnMembros(): number {return this.nMembros}

    public set setBancada(novoBancada:string){
        if (novoBancada.trim(). length===0){
            console.log("\nERRO!!! O campo não pode ser vazio")
            return
        }
        this.bancada = novoBancada
    }

    public set setnMembros(novonMembros: number){
        if (novonMembros===0) {
            console.log("\nERROR O campo não pode ser vazio")
            return
        }
        this.nMembros = novonMembros
    }
}