import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


const Characters = ( {chars, setChars}  ) => {

    // const fetchData = async () => {
    //     try {
    //     const res = await axios.get(`/api/v1/character/${params.characterId}`);
    //     console.log(res)
    //     setChar(res.data)
    //     }
    //     catch (err) {
    //     console.log('error', err)
    //     }
    // };
    const deleteCharacter = ( e ) => {
        try {
            axios.delete(`http://localhost:8080/api/v1/character/${e._id}`)
            .then(() => {
            //     setRequestData(new Date())
                const res = axios.get('http://localhost:8080/api/v1/character')
                setChars([{...res.data}])
            })

        }
        catch (err) {
            console.log('error', err)
        }
    }

    return (
        <div>
            <header>
                {console.log(chars)}
                {/* {console.log(setChars)} */}
            {setChars.redirect === true ? <Redirect to={`/character`}/> : null }
                <h1>Our Characters</h1>
                <ol>{chars.map(e => (
                    <div key={e._id}>
                    <Link to={`/character/${e._id}`} >
                        <h3>
                    {e.name}
                    </h3></Link>
                    <Link to={`/character/edit/${e._id}`}>
                    <button>Edit Character</button>
                    </Link>
                    <button onClick={() => {
                        deleteCharacter(e)
                    }}>Delete Character</button>
                    </div>
                ))}</ol>
            </header>
            <Link to={'/character/new'}><button>Add new Character</button></Link>
            
            
        </div>
    )
}

// Characters.defaultProps = {
//     name: 'propTest',
// }

// Characters.propTypes = {
//     name: PropTypes.string.isRequired,

// }

// export default class Characters extends Component {
    
    //     render() {
        //         return (
            //             <div>
            //                 <h1 className='Characters'>Character Page</h1>
            //             </div>
            //         )
            //     }
            // }

export default Characters