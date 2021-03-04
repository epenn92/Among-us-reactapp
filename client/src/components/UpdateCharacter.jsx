import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const UpdateCharacter = ( { chars, setChars} ) => {

    const params = useParams()
    const [newChar, setNewChar] = useState([chars])

    useEffect(() => {
        const fetchData = async () => {
            try {
            const res = await axios.get(`https://www.epenn92reactapp.space:8080/api/v1/character/${params.characterId}`,);
            console.log(res)
            setNewChar(res.data)
            }
            catch (err) {
            console.log('error', err)
            }
        };
        fetchData();
    }, []);

const onSubmitUpdateCharacter = (e) =>  {
    e.preventDefault()
    axios.put(`https://www.epenn92reactapp.space:8080/api/v1/character/edit/${newChar._id}`, newChar)
        .then(() => {
            const res = axios.get('/api/v1/character')
            console.log(res)
            setChars([{...res.data}])
            setNewChar({ redirect: true})
        })
        .catch((err) => {
            console.log('error', err)
        })
}
// const onSubmitCreateCharacter = (e) =>  {
//     e.preventDefault()
//     axios.post('/api/v1/character/new', newChar)
//         .then(() => {
//             console.log(setChars)
//             // setNewChar([...chars])
//             const res = axios.get('/api/v1/character')
//             // setNewChar([{...res.data}])
//             console.log(res)
//             setChars([{...res.data}])
//             setNewChar({ redirect: true})
//         })
//         .catch((err) => {
//             console.log('error', err)
//         })
// }

const handleChange = (e) => {
    setNewChar({...newChar, [e.target.name]: e.target.value})
    console.log(newChar)
}


return (
    <div>
        <h1>Update Character</h1>
        {newChar.redirect === true ? <Redirect to={`/character`}/> : null }
        <form onSubmit={onSubmitUpdateCharacter}>
        <input type='text' name='name' placeholder='Character name'
        onChange={handleChange} defaultValue={newChar.name}></input>
        <input type='text' name='color' placeholder='color'
        onChange={handleChange} defaultValue={newChar.color}></input>
        <select type='text' name='impostor'
        onChange={handleChange}>
            <option name='yes' defaultValue={newChar.impostor}>Crewmate</option>
            <option name='no' defaultValue={newChar.impostor}>Impostor</option>
            </select>
        <button type='submit'>Update Character</button>
        </form>
    </div>
)
}

export default UpdateCharacter