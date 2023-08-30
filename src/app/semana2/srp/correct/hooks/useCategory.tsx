import { useState } from 'react'

const useCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  
  const handleCategory = (category: string) => {
    setSelectedCategory(category)
  }
  return { selectedCategory, handleCategory }
}

export default useCategory
