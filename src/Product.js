import React from 'react'

function Product(props) {

    function purchase(item)
    {
        alert(`Puschasing this item ${item}`);
    }

  return (
    <div className='product'>
        <img className='img' src={props.url}/>
        <h3>{props.name}</h3>
        <p>R{props.price}</p>
        <button className='btn' onClick={()=>{
            purchase(props.name)
        }}>Purchase</button>
    </div>
  )
}

export default Product