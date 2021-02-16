import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { useState, useEffect, useRef } from 'react'
import Homepage from './components/Homepage.jsx'
import Characters from './components/Characters.jsx'

const App = () => {
  //default state and updated state, state is immutable so use setCrew to remake/change state


  const [chars, setCrew] = useState([
  ])
  useEffect(() => {
    axios.get('/api/v1/character')
      .then((res) => {
        setCrew({ chars: res.data })
      })
  })
  // console.log(chars)

  //Delete character
  const deleteTask = (id) => {

  }

  return (

    <div className='App'>

      <nav className='navBar'>
        <ul className='navBarOptions'>

          <li>Home</li>
          <li>Characters</li>
          <p>end of navbar</p>



        </ul>
      </nav>

      <div className='footer'>
        <nav>

        </nav>
      </div>
      <Router>
        <div className="Routes">
          <Switch>
            {/* how to pass props to react router components */}
            <Route exact path='/' component={Homepage} />
            <Route exact path='/characters'
              render={() => <Characters chars={chars} />}
            />
          </Switch>
        </div>
      </Router>
    </div>
  )
}


// class App extends Component {
//   render() {
//     return (
//       <div className='App'>

//         <nav className='navBar'>
//           <ul className='navBarOptions'>

//             <li>Home</li>
//             <li>Characters</li>

//           </ul>
//         </nav>

//         <div className='footer'>
//           <nav>

//           </nav>
//         </div>
//         <Router>
//           <div className="Routes">
//             <Switch>
//               <Route exact path='/' component={Homepage} />
//               <Route exact path='/characters' component={Characters} />
//             </Switch>
//           </div>
//         </Router>
//       </div>
//     )
//   }
// }




export default App;
