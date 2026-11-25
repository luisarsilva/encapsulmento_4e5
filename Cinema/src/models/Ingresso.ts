export class Ingresso{
    private filme: string
    private assento: number

    constructor(filme:string, assento: number){
        this.filme = filme
        this.assento = assento
    }

    public get getFilme(): string {return this.filme}
    public get getAssento(): number {return this.assento}

    public set setFilme(novoFilme:string){
        if (novoFilme.trim(). length===0){
            console.log("\nERRO!!! O campo não pode ser vazio")
            return
        }
        this.filme = novoFilme
    }

    public set setAssento(novoAssento: number){
        if (novoAssento===0) {
            console.log("\nERROR O campo não pode ser vazio")
            return
        }
        this.assento = novoAssento
    }
}