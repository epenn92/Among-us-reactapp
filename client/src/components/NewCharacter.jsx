import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'


const NewCharacter = ( { chars, setChars } ) => {
    
    // const [newChar, setNewChar] = useState([ { name:'', color:'', impostor: false}])
    const [newChar, setNewChar] = useState([ chars])

    const onSubmitCreateCharacter = (e) =>  {
        e.preventDefault()
        axios.post('/api/v1/character/new', newChar)
            .then(() => {
                console.log(setChars)
                // setNewChar([...chars])
                const res = axios.get('/api/v1/character')
                // setNewChar([{...res.data}])
                setChars([{...res.data}])
                setNewChar({ redirect: true})
            })
            .catch((err) => {
                console.log('error', err)
            })
    }

    // const onSubmitCreateCharacter = (e) =>  {
    //     e.preventDefault()
    //     axios.post('/api/v1/character/new', chars)
    //         .then((res) => {
    //             console.log(res)
    //             setChars({ redirect: true})
    //         })
    //         .catch((err) => {
    //             console.log('error', err)
    //         })
    // }

    // const handleChange = (e) => {
    //     setChars({...chars, [e.target.name]: e.target.value})
    //     console.log(chars)
    // }
    const handleChange = (e) => {
        setNewChar({...newChar, [e.target.name]: e.target.value})
        console.log(newChar)
    }


    return (
        <div>
            
            {/* {console.log(chars)}
            {chars.redirect === true ? <Redirect to={`/characters`}/> : null }
            <form onSubmit={onSubmitCreateCharacter}>
            <input type='text' name='name' placeholder='Character name'
            onChange={handleChange} defaultValue={chars.name}></input>
            <input type='text' name='color' placeholder='color'
            onChange={handleChange} defaultValue={chars.color}></input>
            <select type='text' name='impostor'
            onChange={handleChange}>
                <option name='yes' defaultValue={chars.impostor}>Crewmate</option>
                <option name='no' defaultValue={chars.impostor}>Impostor</option>
                </select>
            <button type='submit'>Create Character</button>
            </form> */}
            {newChar.redirect === true ? <Redirect to={`/character`}/> : null }
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
