'use client'
import React from 'react'

interface FactoryProps {
  factory: FormFactory
}

// Abstract Factory
interface FormFactory {
    createTextInput: (placeholder: string) => () => JSX.Element;
    createButton: (label: string) => () => JSX.Element;
}

// Concrete Factory 1 - Default Style
const DefaultFormFactory: FormFactory = {
    createTextInput: (placeholder:string) => () => (
      <input type='text' placeholder={placeholder} />
    ),
    createButton: (label:string) => () => (
      <button className='button '>{label}</button>
    ),
  };

// Concrete Factory 2 - Styled Style
const StyledFormFactory: FormFactory = {
    createTextInput: (placeholder:string) => () => (
        <input type="text" placeholder={placeholder} className="styled-input" />
    ),
    createButton: (label:string) => () => (
        <button className="button primary">{label}</button>
    ),
};

// Usage
const MyForm = ({ factory }: FactoryProps) => {
  const TextInputComponent = factory.createTextInput('Enter text')
  const ButtonComponent = factory.createButton('Submit')

  return (
    <div>
      <TextInputComponent />
      <ButtonComponent />
    </div>
  )
}

const page = () => {
  return (
    <div>
      <h2>Default Style Form</h2>
      <MyForm factory={DefaultFormFactory} />
      <h2>Styled Style Form</h2>
      <MyForm factory={StyledFormFactory} />
    </div>
  )
}

export default page
