import React from 'react'
import style from './ProductCard.module.css'
import { IProduct } from '@/interfaces/interfaces'

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={product?.image} alt='Product' />
      </div>
      <h3>{product?.title}</h3>
      <h4>{product.category}</h4>
      <p>${product?.price}</p>
      <button className='button'>Comprar</button>
    </div>
  )
}

export default ProductCard
