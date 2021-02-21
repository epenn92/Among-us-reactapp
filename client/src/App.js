import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import { useState, useEffect, useRef } from 'react'
import Homepage from './components/Homepage.jsx'
import Characters from './components/Characters.jsx'
import Character from './components/Character.jsx'

const App = () => {

  const [chars, setChars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('api/v1/character',);
        setChars(res.data)
      }
      catch (err) {
        console.log('error', err)
      }
    };
    fetchData();
  }, []);

  const showChar = (id) = {

  }

  // const [char, setChar] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get(`/api/character/${char._id}`);
  //       console.log(res)
  //       setChar(res.data)
  //     }
  //     catch (err) {
  //       console.log('error', err)
  //     }
  //   };
  //   fetchData();
  // }, []);

  // axios.get('/api/champion')
  //         .then((res) => {
  //             this.setState({ champions: res.data})
  //         })
  // }
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
          {/* <p>{chars}</p> */}

          {/* <p>{chars.map(e => (
            <li key={e._id}>{e.color}</li>
          ))}</p> */}



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
            <Route exact path='/character/:characterId'
              component={Character} />

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
