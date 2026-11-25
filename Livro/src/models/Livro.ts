export class Livro{
    private titulo: string
    private paginas: number
   
    constructor(titulo: string, paginas: number){
        this.titulo = titulo;
        this.paginas = paginas
    }

    public get getTitulo(): string {return this.titulo}
    public get getPaginas(): number {return this.paginas}

    public set setTitulo(novoTitulo: string){
        if (novoTitulo.trim(). length === 0){
            console.error("\n ERRO!!! O campo não pode ser vazio")
            return
        }
        this.titulo = novoTitulo
    }

    public set setPaginas(novoPaginas: number){
        if(novoPaginas===0){
            console.error("\n O campo não pode ser vazio")
            return
        }
        this.paginas = novoPaginas
    }
}