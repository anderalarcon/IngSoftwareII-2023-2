import React from 'react'
import Product from './product'

const productExample = {
    title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
    price: 109.95,
    category: 'Backpack',
    image: 'https://cdn.thewirecutter.com/wp-content/media/2022/09/backpacks-2048px-9904.jpg'
}
const page = () => {
  return (
    <Product product={productExample} />
  )
}

export default page