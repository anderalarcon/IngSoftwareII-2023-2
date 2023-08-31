import React from 'react'
import Thumbnail from './thumbnail'
import { IProduct } from '@/interfaces/interfaces'

interface IProductProps {
  product: IProduct
}

const Product = ({ product }: IProductProps) => {
  const { title, price, category } = product
  return (
    <div>
      <Thumbnail product={product} />
      <h3>{title}</h3>
      <h4>{category}</h4>
      <p>${price}</p>
    </div>
  )
}

export default Product
