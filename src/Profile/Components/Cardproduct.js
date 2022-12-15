import React from 'react'
import { Button, Card } from 'react-bootstrap'
import PropTypes from 'prop-types'
import './Cardproduct.css'
const Cardproduct = (props) => {
    const handelName=()=> alert(`my name is ${props.name}`)

  return (
    <div className='cwart'>
        <Card style={{ width: '18rem' }}>
      {props.children}
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.age}</Card.Text>
        <Card.Text>{props.profession}</Card.Text>
        <Button variant="primary" onClick={handelName}>click me</Button>
      </Card.Body>
    </Card>
    </div>
  )
}
Cardproduct.propTypes = {
    age:PropTypes.number 
}
Cardproduct.defaultProps={
    name : 'amal'
}
export default Cardproduct
