import { IProduct } from '@/interfaces/interfaces'
import Image from 'next/image'
import React from 'react'

interface IThumbnailProps {
  product: IProduct
}

const Thumbnail = ({ product }: IThumbnailProps) => {
  const { image } = product
  return <Image src={image} alt='Producto' width={100} height={100} />
}

export default Thumbnail
