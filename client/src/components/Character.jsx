import React from 'react'


const Character = ( { crew } ) => {
    return (
        <div className = 'character'>
            <h4>{crew.color}</h4>
        </div>
    )
}

export default Character
