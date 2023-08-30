'use client'

import ProductCard from '@/components/ProductCard/ProductCard'
import React from 'react'
import useProducts from './hooks/useProducts'
import useCategories from './hooks/useCategories'
import { getFilteredProducts } from './utilities/functions'
import useCategory from './hooks/useCategory'
import { IProduct } from '@/interfaces/interfaces'

const page = () => {
  const products = useProducts()
  const categories = useCategories()
  const { selectedCategory, handleCategory } = useCategory()

  return (
    <div className='container'>
      <h1 className='center'>Categorías</h1>
      <div className='flex justify-between'>
        {categories.map((category: string) => {
          return (
            <button className='button' onClick={() => handleCategory(category)}>
              {category}
            </button>
          )
        })}
      </div>
      <div className='flex wrap justify-between'>
        {getFilteredProducts(products, selectedCategory).map(
          (product: IProduct) => {
            return <ProductCard product={product} />
          }
        )}
      </div>
    </div>
  )
}

export default page
