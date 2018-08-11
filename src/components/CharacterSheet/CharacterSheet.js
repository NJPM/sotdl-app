import React, {Component} from 'react'
import Card from '@material-ui/core/Card'

const CharacterSheet = props => {
  const number = [20, 10, 15, 8]
  const mods = mod => mod - 10
  return (
    <div>
      <Card>
        {['Strength', 'Intellect', 'Agility', 'Will'].map((stat, i) => (
          <p key={i}>
            {stat}: {number[i]} Mods: {mods(number[i])}
          </p>
        ))}
      </Card>
    </div>
  )
}

export default CharacterSheet
