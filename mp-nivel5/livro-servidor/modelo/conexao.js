const banco = require('mongoose')

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

banco.connect('mongodb+srv://estacio:1hN0gi9dgwaB4IZH@cluster0.liky5cy.mongodb.net/', options)
    .then(() => {
        console.log('Conectado ao MongoDB com sucesso!')
    })
    .catch(() => {
        console.log('Erro ao conectar ao MongoDB.')
    })

module.exports = banco