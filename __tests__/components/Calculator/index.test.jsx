import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Calculator from '../../../src/components/Calculator/Calculator'

describe('Calculator Component', () => {
  test('Should render correctly', () => {
    render(<Calculator />)
    const title = screen.getByRole('heading')
    expect(title).toHaveTextContent('Calculator')
  })

  test('Should calculate the sum correctly', () => {
    render(<Calculator />)
    const input1 = screen.getByTestId('input1')
    const input2 = screen.getByTestId('input2')
    const addButton = screen.getByText('Add')
    const resultElement = screen.getByTestId('result')

    fireEvent.change(input1, { target: { value: '2' } })
    fireEvent.change(input2, { target: { value: '3' } })

    fireEvent.click(addButton)

    expect(resultElement).toHaveTextContent('Result: 5')
  })

  test('Should calculate subtraction correctly', () => {
    render(<Calculator />)
    const input1 = screen.getByTestId('input1')
    const input2 = screen.getByTestId('input2')
    const subtractButton = screen.getByText('Subtract')
    const resultElement = screen.getByTestId('result')

    fireEvent.change(input1, { target: { value: '5' } })
    fireEvent.change(input2, { target: { value: '3' } })

    fireEvent.click(subtractButton)

    expect(resultElement).toHaveTextContent('Result: 2')
  })

  test('Should calculate multiplication correctly', () => {
    render(<Calculator />)
    const input1 = screen.getByTestId('input1')
    const input2 = screen.getByTestId('input2')
    const multiplyButton = screen.getByText('Multiply')
    const resultElement = screen.getByTestId('result')

    fireEvent.change(input1, { target: { value: '4' } })
    fireEvent.change(input2, { target: { value: '2' } })

    fireEvent.click(multiplyButton)

    expect(resultElement).toHaveTextContent('Result: 8')
  })
})
