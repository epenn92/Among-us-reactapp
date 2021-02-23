const mongoose = require('./connection.js')

const CharacterSchema = new mongoose.Schema({
    name: String,
    color: String,
    image: String,
    impostor: String,
})

const CharacterCollection = mongoose.model('Character', CharacterSchema)

const getAllCharacters = () => {
    return CharacterCollection.find()
}

const getCharacter = (characterId) => {
    return CharacterCollection.findById(characterId)
}

const addNewCharacter = (newCharacter) => {
    return CharacterCollection.create(newCharacter)
}

const updateCharacter = (characterId, newCharacter) => {
    return CharacterCollection.findByIdAndUpdate(characterId, newCharacter)
}

const deleteCharacter = (characterId) => {
    return CharacterCollection.deleteOne({ _id: characterId })
}

module.exports = {
    getAllCharacters,
    getCharacter,
    addNewCharacter,
    updateCharacter,
    deleteCharacter,
}