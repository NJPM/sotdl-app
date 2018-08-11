import React, {Component} from 'react'
import Button from '@material-ui/core/Button'

const SubmitButton = props => {
  console.log(props)
  const {
    props: {name}
  } = props
  console.log(name)
  return <Button>{name}</Button>
}

export default SubmitButton
