import React from 'react'

// Product Interface
interface ButtonProps {
  label: string
}

// Concrete Product - Button
const DefaultButton = ({ label }: ButtonProps) => (
  <button className='button'>{label}</button>
)

const PrimaryButton = ({ label }: ButtonProps) => (
  <button className='button primary'>{label}</button>
)

// Factory Method
const createButton = (type: string) => {
  switch (type) {
    case 'DEFAULT':
      return DefaultButton
    case 'PRIMARY':
      return PrimaryButton
    default:
      return DefaultButton
  }
}

interface MyButtonProps {
    type:string
    label:string
}

// Usage
const MyButton = ({ type, label }: MyButtonProps) => {
  const ButtonComponent = createButton(type)
  return <ButtonComponent label={label} />
}

const page = () => {
  return (
    <div>
      <MyButton type={'DEFAULT'} label='Default Button' />
      <MyButton type={'PRIMARY'} label='Primary Button' />
    </div>
  )
}

export default page
