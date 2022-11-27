import React from 'react'
import Card from "./Card"
import App from '../App'

const CardMap = ({ products }) => {


  return (
    <div className='container'>
      {products.map((product) => <Card product={product} key={product.id} />)}
    </div>
  )
}

export default CardMap