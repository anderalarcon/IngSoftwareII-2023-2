import Image from 'next/image'
import React from 'react'

interface IThumbnailProps {
  imageUrl: string
}

const Thumbnail = ({ imageUrl }: IThumbnailProps) => {
  return <Image src={imageUrl} alt='Producto' width={100} height={100} />
}

export default Thumbnail
