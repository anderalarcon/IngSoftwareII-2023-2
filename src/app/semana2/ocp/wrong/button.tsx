import React from 'react'
import Image from 'next/image'
import RightArrow from '../../../../assets/icons/rightArrow.svg'
import LeftArrow from '../../../../assets/icons/leftArrow.svg'
import RightArrow2 from '../../../../assets/icons/rightArrow2.svg'

interface IButtonProps {
  text: string
  role?: 'next' | 'back' | 'link' | 'next2'
}
export const Button = (props: IButtonProps) => {
  const { text, role } = props
  return (
    <button style={{ alignItems: 'center' }} className='flex gap-10 button'>
      <p>{text}</p>
      {role === 'next' && (
        <Image src={RightArrow.src} width={20} height={20} alt='Arrow' />
      )}
      {role === 'back' && (
        <Image src={LeftArrow.src} width={20} height={20} alt='Arrow' />
      )}
      {role === 'next2' && (
        <Image src={RightArrow2.src} width={20} height={20} alt='Arrow' />
      )}
    </button>
  )
}

export default Button
