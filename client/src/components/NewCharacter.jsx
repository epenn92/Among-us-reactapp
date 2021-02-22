import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'


const NewCharacter = () => {
    
    const [newChar, setNewChar] = useState([ { name:'', color:'', impostor: false}])

    const onSubmitCreateCharacter = (e) =>  {
        e.preventDefault()
        axios.post('/api/v1/character/new', newChar)
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
            {newChar.redirect === true ? <Redirect to={`/character/`}/> : null }
            <form onSubmit={onSubmitCreateCharacter}>
            <input type='text' name='name' placeholder='Character name'
            onChange={handleChange} value={newChar.name}></input>
            <input type='text' name='color' placeholder='color'
            onChange={handleChange} value={newChar.color}></input>
            <select type='text' name='impostor'
            onChange={handleChange}>
                <option name='yes' value={false}>Crewmate</option>
                <option name='no' value={true}>Impostor</option>
                </select>
            <button type='submit'>Create Character</button>
            </form>
        </div>
    )
}

export default NewCharacter
    //     const [chars, setChars] = useState([]);
    
    
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get('api/v1/character',);
//         setChars(res.data)
//       }
//       catch (err) {
//         console.log('error', err)
//       }
//     };
//     fetchData();
//   }, []);
