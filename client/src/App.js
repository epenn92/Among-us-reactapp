import React, { Component } from 'react'
import './App.css'
import Homepage from './components/Homepage.jsx'


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
      </div>
    )
  }
}




export default App;
