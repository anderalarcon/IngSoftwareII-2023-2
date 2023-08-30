import Image from 'next/image'
import React from 'react'

interface IButtonProps {
  text: string
  iconSrc?: string
}
export const Button = (props: IButtonProps) => {
  const { text, iconSrc } = props
  return (
    <button style={{ alignItems: 'center' }} className='flex gap-10 button'>
      <p>{text}</p>
      {iconSrc && <Image src={iconSrc} width={20} height={20} alt='Arrow' />}
    </button>
  )
}

export default Button
