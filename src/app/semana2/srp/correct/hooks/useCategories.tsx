import { fetchEndpoint } from '@/utilities/functions'
import { useEffect, useState } from 'react'

const useCategories = () => {
  const [categories, setCategories] = useState<string[]>([])
  useEffect(() => {
    fetchEndpoint('https://fakestoreapi.com/products/categories', setCategories)
  }, [])
  return categories
}

export default useCategories
