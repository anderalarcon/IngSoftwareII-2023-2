import { IProduct } from "@/interfaces/interfaces"

export const getFilteredProducts = (products: IProduct[], selectedCategory: string) => {
  if (selectedCategory === '') return products

  return products.filter((product: IProduct) => {
    return product.category === selectedCategory
  })
}
