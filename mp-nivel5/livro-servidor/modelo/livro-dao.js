const Livro = require('./livro-schema')

const obterLivros = async () => {
    const livros = await Livro.find()
    return livros
}

const incluir = async (livro) => {
    const response = await Livro.create(livro)
    // console.log(response)
}

const excluir = async (codigo) => {
    const response = await Livro.deleteOne({_id: codigo})
}

module.exports = { obterLivros, incluir, excluir }