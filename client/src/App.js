import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage.jsx'
import Characters from './components/Characters.jsx'


class App extends Component {
  render() {
    return (
      <div className='App'>

        <nav className='navBar'>
          <ul className='navBarOptions'>

            <li>Home</li>
            <li>Characters</li>

          </ul>
        </nav>

        <div className='footer'>
          <nav>

          </nav>
        </div>
        <Router>
          <div className="Routes">
            <Switch>
              <Route exact path='/' component={Homepage} />
              <Route exact path='/characters' component={Characters} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}




export default App;
