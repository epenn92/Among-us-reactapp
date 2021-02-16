import Character from './Character.jsx'
import PropTypes from 'prop-types'
import React from 'react'




const Characters = ( { chars } ) => {

    return (
        <div>
            <header>
                <h1>Our Characters</h1>
        
            {chars.map((crew) => (
                <Character key={crew.id} crew={crew} />
            ))}
            
            </header>
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