import React, {Component, useState} from 'react'


export const CharacterSheet = props => {
  // Set default stats
  var characterStats = {
    level: localStorage.getItem('level') || 0,
    strength: localStorage.getItem('strength') || 10,
    agility: localStorage.getItem('agility') || 10,
    intellect: localStorage.getItem('intellect') || 10,
    will: localStorage.getItem('will') || 10,
    str: 0,
    agi: 0,
    int: 0,
    wil: 0,
    health: 10,
    healing: 2,
    damage: localStorage.getItem('damage') || 0,
    defense: 10,
    speed: localStorage.getItem('speed') || 10,
    perception: 10,
    per: 0,
    insanity: localStorage.getItem('insanity') || 0,
    corruption: localStorage.getItem('corruption') || 0,
    size: localStorage.getItem('size') || 1,
    power: localStorage.getItem('power') || 0,
    rank0: 0,
    rank1: 0,
    rank2: 0,
    rank3: 0,
    rank4: 0,
    rank5: 0,
    updateStats: function() {
      // Set derived stats
      this.str = this.strength - 10
      this.agi = this.agility - 10
      this.int = this.intellect - 10
      this.wil = this.will - 10
      this.health = this.strength
      this.healing = Math.floor(this.health/4)
      this.defense = this.agility
      this.perception = this.intellect
      this.per = this.perception - 10
      this.rank0 = parseInt(this.power) + 1
      this.rank1 = ((this.power >= 5) ? 3 : (this.power >= 2) ? 2 : (this.power == 1) ? 1 : 0)
      this.rank2 = ((this.power >= 4) ? 2 : (this.power >= 2) ? 1 : 0)
      this.rank3 = ((this.power >= 5) ? 2 : (this.power >= 3) ? 1 : 0)
      this.rank4 = ((this.power >= 4) ? 1 : 0)
      this.rank5 = ((this.power >= 5) ? 1 : 0)
    }
  }

  // Update stats onChange of text box
  const [stats, setStats] = useState(characterStats)
  const changeSheet = (event, val) => {
    setStats({
      ...stats,
      [val]: event.target.value,
    })
  }
  stats.updateStats()
  const {
    level,
    strength,
    agility,
    intellect,
    will,
    str,
    agi,
    int,
    wil,
    health,
    healing,
    damage,
    defense,
    speed,
    perception,
    per,
    insanity,
    corruption,
    size,
    power,
    rank0,
    rank1,
    rank2,
    rank3,
    rank4,
    rank5,
  } = stats

  localStorage.setItem('level', level)
  localStorage.setItem('strength', strength)
  localStorage.setItem('agility', agility)
  localStorage.setItem('intellect', intellect)
  localStorage.setItem('will', will)
  localStorage.setItem('damage', damage)
  localStorage.setItem('speed', speed)
  localStorage.setItem('insanity', insanity)
  localStorage.setItem('corruption', corruption)
  localStorage.setItem('size', size)
  localStorage.setItem('power', power)

  // UI response
  return (
    <div>
      <img src='/img/bookletView1.png' style={{
        width: '100%',
        height: 'auto',
        position: 'relative',
        zIndex: 100,
        left: '0',
        top: '0',
      }}></img>
      <img src='/img/bookletView2.png' style={{
        width: '100%',
        height: 'auto',
        position: 'relative',
        zIndex: 101,
      }}></img>

      {/* Level */}
      <input type='number' onChange={(e) => changeSheet(e, 'level')} defaultValue={level} style={{
        position: 'absolute',
        left: '44.15%',
        top: '5.9%',
        width: '2.0%',
        zIndex: 500,
      }}></input>

      {/* Strength */}
      <input type='number' onChange={(e) => changeSheet(e, 'strength')} defaultValue={strength} style={{
        position: 'absolute',
        left: '3%',
        top: '34.8%',
        width: '3.5%',
        zIndex: 500,
      }}></input>
      <div style={{
        position: 'absolute',
        left: '10.5%',
        top: '34.8%',
        width: '1.4%',
        zIndex: 500,
      }}>{str}</div>
      {/* Agility */}
      <input type='number' onChange={(e) => changeSheet(e, 'agility')} defaultValue={agility} style={{
        position: 'absolute',
        left: '3%',
        top: '41.9%',
        width: '3.5%',
        zIndex: 500,
      }}></input>
      <div style={{
        position: 'absolute',
        left: '10.5%',
        top: '41.9%',
        width: '1.4%',
        zIndex: 500,
      }}>{agi}</div>
      {/* Intellect */}
      <input type='number' onChange={(e) => changeSheet(e, 'intellect')} defaultValue={intellect} style={{
        position: 'absolute',
        left: '3%',
        top: '49%',
        width: '3.5%',
        zIndex: 500,
      }}></input>
      <div style={{
        position: 'absolute',
        left: '10.5%',
        top: '49%',
        width: '1.4%',
        zIndex: 500,
      }}>{int}</div>
      {/* Will */}
      <input type='number' onChange={(e) => changeSheet(e, 'will')} defaultValue={will} style={{
        position: 'absolute',
        left: '3%',
        top: '56.1%',
        width: '3.5%',
        zIndex: 500,
      }}></input>
      <div style={{
        position: 'absolute',
        left: '10.5%',
        top: '56.1%',
        width: '1.4%',
        zIndex: 500,
      }}>{wil}</div>

      {/* Damage */}
      <input type='number' onChange={(e) => changeSheet(e, 'damage')} defaultValue={damage} style={{
        position: 'absolute',
        left: '29.7%',
        top: '42.7%',
        width: '2.0%',
        zIndex: 500,
      }}></input>
      {/* Defense */}
      <div style={{
        position: 'absolute',
        left: '36.65%',
        top: '36.8%',
        width: '1.4%',
        zIndex: 500,
      }}>{defense}</div>
      {/* Health */}
      <div style={{
        position: 'absolute',
        left: '42.5%',
        top: '43.3%',
        width: '1.4%',
        zIndex: 500,
      }}>{health}</div>
      <div style={{
        position: 'absolute',
        left: '45.05%',
        top: '46.6%',
        width: '1.4%',
        zIndex: 500,
      }}>{healing}</div>

      {/* Speed */}
      <input type='number' onChange={(e) => changeSheet(e, 'speed')} defaultValue={speed} style={{
        position: 'absolute',
        left: '26.45%',
        top: '54.0%',
        width: '2.0%',
        zIndex: 500,
      }}></input>
      {/* Perception */}
      <div style={{
        position: 'absolute',
        left: '31.8%',
        top: '54.1%',
        width: '2.0%',
        zIndex: 500,
      }}>{perception}</div>
      <div style={{
        position: 'absolute',
        left: '33.75%',
        top: '55.4%',
        width: '2.0%',
        zIndex: 500,
      }}>{per}</div>
      {/* Insanity */}
      <input type='number' onChange={(e) => changeSheet(e, 'insanity')} defaultValue={insanity} style={{
        position: 'absolute',
        left: '35.95%',
        top: '54.0%',
        width: '2.0%',
        zIndex: 500,
      }}></input>
      {/* Corruption */}
      <input type='number' onChange={(e) => changeSheet(e, 'corruption')} defaultValue={corruption} style={{
        position: 'absolute',
        left: '40.7%',
        top: '54.0%',
        width: '2.0%',
        zIndex: 500,
      }}></input>
      {/* Size */}
      <input type='number' onChange={(e) => changeSheet(e, 'size')} defaultValue={size} style={{
        position: 'absolute',
        left: '45.4%',
        top: '54.0%',
        width: '2.0%',
        zIndex: 500,
      }}></input>

      {/* Power */}
      <input type='number' onChange={(e) => changeSheet(e, 'power')} defaultValue={power} style={{
        position: 'absolute',
        left: '53.8%',
        top: '9.5%',
        width: '2.0%',
        zIndex: 500,
      }}></input>
      <div style={{
        position: 'absolute',
        left: '61.4%',
        top: '9.9%',
        width: '2.0%',
        zIndex: 500,
      }}>{rank0}</div>
      <div style={{
        position: 'absolute',
        left: '65.0%',
        top: '9.9%',
        width: '2.0%',
        zIndex: 500,
      }}>{rank1}</div>
      <div style={{
        position: 'absolute',
        left: '68.55%',
        top: '9.9%',
        width: '2.0%',
        zIndex: 500,
      }}>{rank2}</div>
      <div style={{
        position: 'absolute',
        left: '72.1%',
        top: '9.9%',
        width: '2.0%',
        zIndex: 500,
      }}>{rank3}</div>
      <div style={{
        position: 'absolute',
        left: '75.55%',
        top: '9.9%',
        width: '2.0%',
        zIndex: 500,
      }}>{rank4}</div>
      <div style={{
        position: 'absolute',
        left: '79.1%',
        top: '9.9%',
        width: '2.0%',
        zIndex: 500,
      }}>{rank5}</div>

    </div>
  )
}
