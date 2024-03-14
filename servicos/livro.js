const fs = require("fs")
const livroslista = fs.readFileSync("livros.json")

function getTodosLivros() {
    return JSON.parse(livroslista)
}

function getLivroByID(id){

    return JSON.parse(livroslista).filter(livro => livro.id === id)

}

function insereLivro(livroNovo){
    const livros = JSON.parse(livroslista)

    const novaListaDeLivros = [...livros, livroNovo]

    return fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
}

function modificaLivro(modificacoes, id){

    let livrosAtuais = JSON.parse(livroslista)

    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function apagarLivro(id){

    const livros = JSON.parse(livroslista)

    const livrosfiltrados = livros.filter(livro => livro.id !== id)

    fs.writeFileSync("livros.json", JSON.stringify(livrosfiltrados))




}

module.exports = {
    getTodosLivros,
    getLivroByID,
    insereLivro,
    modificaLivro,
    apagarLivro
}
