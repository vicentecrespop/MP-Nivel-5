const { obterLivros, incluir, excluir } = require('../modelo/livro-dao')

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send(obterLivros())
})

router.post('/', (req,res) => {
    const livro = req.body
    try {
        incluir(livro)
        return res.json({msg: 'Sucesso.'})
    } catch(e) {
        return res.json({msg: 'Erro'})
    }
})

router.delete('/:codigo', (req, res) => {
    const codigo = req.params.codigo
    try {
        excluir(codigo)
        return res.json({msg: 'Sucesso.'})
    } catch(e) {
        return res.json({msg: 'Erro'})
    }
})

module.exports = router