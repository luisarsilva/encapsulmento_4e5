export class Jogo{
    private titulo: string
    private preco: number

    constructor(titulo: string, preco: number){
        this.titulo = titulo,
        this.preco = preco
    }

    public get getTitulo(): string {return this.titulo}
    public get getPreco(): number {return this.preco}

    public set setTitulo(novoTitulo: string){
        if (novoTitulo.trim(). length === 0){
            console.error("\n ERRO!!! O campo não pode ser vazio")
            return
        }
        this.titulo = novoTitulo
    }

    public set setPreco(novopreco: number){
        if(novopreco===0){
            console.error("\n O campo não pode ser vazio")
            return
        }
        this.preco = novopreco
    }
}