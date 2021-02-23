import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import { useState, useEffect, useRef } from 'react'
import Homepage from './components/Homepage.jsx'
import Characters from './components/Characters.jsx'
import Character from './components/Character.jsx'
import NewCharacter from './components/NewCharacter.jsx'
import UpdateCharacter from './components/UpdateCharacter.jsx'

const App = () => {

  const [chars, setChars] = useState([]);
  const [requestData, setRequestData] = useState(new Date())

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await axios.get('api/v1/character', {
        });
        setChars(res.data)
      }
      catch (err) {
        console.log('error', err)
      }
    };
    fetchData();

  }, [chars.length]);



  // const [newChar, setNewChar] = useState([])


  // const showChar = (id) = {

  // }

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
  // const deleteTask = (id) => {

  // }

  return (

    <div className='App'>

      <nav className='navBar'>
        <ul className='navBarOptions'>

          <li><a href='/'>Home</a></li>
          <li><a href='/character'>Characters</a></li>
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
            <Route exact path='/character'
              render={() => <Characters chars={chars} setChars={setChars} setRequestData={setRequestData} />}
            />
            <Route exact path='/character/new'
              render={() => <NewCharacter chars={chars} setChars={setChars} />} />

            <Route exact path='/character/:characterId'
              component={Character} />
            <Route exact path='/character/edit/:characterId'
              render={() => <UpdateCharacter chars={chars} setChars={setChars} />} />
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
