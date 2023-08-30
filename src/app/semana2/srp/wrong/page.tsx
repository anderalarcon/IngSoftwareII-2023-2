'use client'

import ProductCard from '@/components/ProductCard/ProductCard'
import { IProduct } from '@/interfaces/interfaces'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  
  const handleCategory = (category:string) => {
    setSelectedCategory(category)
  }

  const getFilteredProducts = () => {
    if (selectedCategory === '') return products

    return products.filter((product:IProduct) => {
      return product.category === selectedCategory
    })
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json))
  }, [])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => setCategories(json))
  }, [])

  return (
    <div className='container'>
      <h1 className='center'>
        Categorías
      </h1>
      <div className='flex justify-between'>
        {categories.map((category: string) => {
          return <button className='button' onClick={() => handleCategory(category)}>
            {category}
            </button>
        })}
      </div>
      <div className='flex wrap justify-between'>
        {getFilteredProducts().map((product: IProduct) => {
          return <ProductCard product={product} />
        })}
      </div>
    </div>
  )
}

export default page
