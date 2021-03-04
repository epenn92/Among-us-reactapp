import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button.jsx'

const Homepage = () => {
    const onClick = () => {
        
    }

    return (
        <div className="Homepage">
                <h1 className="main">Among Us App</h1>
                <p>This app is to show appreciation for the game Among Us which has skyrocketed in popularity after streamers played the PC version. There's currently tournaments and events for the game and it's extremely fun to play. Test1</p>
                <Link to="/character"><Button color='cyan' text='Characters' onClick={onClick} /></Link>
            </div>
    )
}


// export default class Homepage extends Component {

//     render() {
//         return (
            // <div className="Homepage">
            //     <h1 className="main">Among Us App</h1>
            //     <p className="words">This app is to show appreciation for the game Among Us which has skyrocketed in popularity after streamers played the PC version. There's currently tournaments and events for the game and it's extremely fun to play.</p>
            //     <Link to="/characters"><button className='buttons'>Characters</button></Link>
            // </div>
//         )
//     }
// }


export default Homepage