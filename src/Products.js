import React from 'react'
import Product from './Product'

function Products() {
  let products=[
    {id:1,name:"INTEL 14th GEN i9 14900KF",price:51599,url:"https://www.evetech.co.za/repository/webp/monitor-and-nzxt-h7-flow-mid-tower-case-pc-600px-v01.webp"},
    {id:2,name:"RYZEN 5 5500 RX 6700",price:14799,url:"https://www.evetech.co.za/repository/ProductImages/evetech-onyx-tempered-glass-atx-gaming-case-with-monitor-600px-v01.jpg"},
    {id:3,name:"INTEL 12th GEN i9 12900F",price:19399,url:"https://www.evetech.co.za/repository/ProductImages/antec-nx291-mid-tower-gaming-case-600px-v11.jpg"}
  ]
  return (
    <div className='products'>
      {
        products.map((product)=>{
          return(
            <Product name={product.name} price={product.price} url={product.url} key={product.id}/>
          )
        })
      }
    </div>
  )
}

export default Products
