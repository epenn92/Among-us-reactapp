import PropTypes from 'prop-types'
import React from 'react'

const Characters = ({ name }) => {
    return (
        <div>
            <header>
                <h1>{name}</h1>
                <h2>hi</h2>
            </header>
        </div>
    )
}

// Characters.defaultProps = {
//     name: 'propTest',
// }

Characters.propTypes = {
    name: PropTypes.string.isRequired,

}

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