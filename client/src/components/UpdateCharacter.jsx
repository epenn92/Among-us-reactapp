import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'



const UpdateCharacter = ( props ) => {

    const [newChar, setNewChar] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
            const res = await axios.get(`/api/v1/character/${props.match.params.characterId}`,);
            console.log(res)
            setNewChar(res.data)
            }
            catch (err) {
            console.log('error', err)
            }
        };
        fetchData();
    }, []);

const onSubmitCreateCharacter = (e) =>  {
    e.preventDefault()
    axios.put(`/api/v1/character/edit/${newChar._id}`, newChar)
        .then((res) => {
            console.log(res)
            setNewChar({ redirect: true})
        })
        .catch((err) => {
            console.log('error', err)
        })
}

const handleChange = (e) => {
    setNewChar({...newChar, [e.target.name]: e.target.value})
    console.log(newChar)
}


return (
    <div>
        <h1>Update Character</h1>
        {newChar.redirect === true ? <Redirect to={`/`}/> : null }
        <form onSubmit={onSubmitCreateCharacter}>
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