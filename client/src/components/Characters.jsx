import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'




const Characters = ( { chars } ) => {

    return (
        <div>
            <header>
                <h1>Our Characters</h1>
                <ol>{chars.map(e => (
                    <Link to={`/character/${e._id}`} key={e._id}>
                        <h3>
                    {e.name}
                    </h3></Link>
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