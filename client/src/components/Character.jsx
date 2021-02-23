import React from 'react'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'

const Character = () => {

    const params = useParams()
    

    const [char, setChar] = useState([params]);
    useEffect(() => {
    const fetchData = async () => {
        try {
        const res = await axios.get(`/api/v1/character/${params.characterId}`);
        console.log(res)
        setChar(res.data)
        }
        catch (err) {
        console.log('error', err)
        }
    };
    fetchData();
    }, [params]);

    
    return (
        <div className = 'character'>
            <h1>
                {char.name}
            </h1>
            <li>
                {char.color} is <b>{char.impostor === 'Impostor' ? 'an impostor' : 'not an impostor'}</b>
            </li>

        </div>
    )
}

export default Character
