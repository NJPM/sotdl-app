import React, {Component} from 'react'
import logo from './logo.svg'
import CharacterSheet from './components/CharacterSheet/CharacterSheet'
import SubmitButton from './components/Button'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Hello</h1>
        </header>
        <CharacterSheet />
        <SubmitButton props={{name: 'Submit'}} />
      </div>
    )
  }
}

export default App
