export class Relatorio{
    private codInst: number
    private totalAlu: number

    constructor(codInst: number, totalAlu: number){
        this.codInst = codInst,
        this.totalAlu = totalAlu
    }

    public get getCodInst(): number {return this.codInst}
    public get getTotalAlu(): number {return this.totalAlu}

    public set setCodInst(novoCodInst: number){
        if (novoCodInst=== 0){
            console.error("\n ERRO!!! O campo não pode ser vazio")
            return
        }
        this.codInst = novoCodInst
    }

    public set setTotalAlu(novoTotalAlu: number){
        if(novoTotalAlu===0){
            console.error("\n O campo não pode ser vazio")
            return
        }
        this.totalAlu = novoTotalAlu
    }
}