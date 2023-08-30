import { IProduct } from '@/interfaces/interfaces'
import { fetchEndpoint } from '@/utilities/functions'
import { useEffect, useState } from 'react'

const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  useEffect(() => {
    fetchEndpoint('https://fakestoreapi.com/products', setProducts)
  }, [])
  return products
}

export default useProducts
