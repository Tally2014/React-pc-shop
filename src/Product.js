import React from 'react'

function Product(props) {
  return (
    <div className='product'>
        <img className='img' src={props.url}/>
        <h3>{props.name}</h3>
        <p>R{props.price}</p>
        <button className='btn'>Purchase</button>
    </div>
  )
}

export default Product