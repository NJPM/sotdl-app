import React, {Component} from 'react'
import {Attributes, CharacterSheet} from './components/CharacterSheet/CharacterSheet'
import SubmitButton from './components/Button'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <CharacterSheet />
      </div>
    )
  }
}

export default App
