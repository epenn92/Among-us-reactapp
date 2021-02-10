const express = require('express')

const characterApi = require('../models/character.js')

const characterRouter = express.Router()

characterRouter.get('/', (req, res) => {
    characterApi.getAllCharacters()
        .then((characters) => {
            res.json(characters)
        })
})

characterRouter.get('/:characterId', (req, res) => {
    characterApi.getCharacter(req.params.characterId)
        .then((character) => {
            res.json(character)
        })
})

characterRouter.post('/new', (req, res) => {
    characterApi.addNewCharacter(req.body)
        .then((character) => {
            res.json({ character })
        })
})

characterRouter.put('/edit/:characterId', (req, res) => {
    characterApi.updateCharacter(req.params.characterId, req.body)
        .then((character) => {
            res.json({ character })
        })
})

characterRouter.delete('/:characterId', (req, res) => {
    characterApi.deleteCharacter(req.params.characterId)
        .then(() => {
            res.json({})
        })
})


module.exports = {
    characterRouter
}