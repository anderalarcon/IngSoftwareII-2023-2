import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const handleSum = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };

  const handleSubtract = () => {
    const subtraction = parseFloat(num1) - parseFloat(num2);
    setResult(subtraction);
  };

  const handleMultiply = () => {
    const multiplication = parseFloat(num1) * parseFloat(num2);
    setResult(multiplication);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <input
        data-testid='input1'
        type='text'
        placeholder='Enter number 1'
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        data-testid='input2'
        type='text'
        placeholder='Enter number 2'
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={handleSum}>Add</button>
      <button onClick={handleSubtract}>Subtract</button>
      <button onClick={handleMultiply}>Multiply</button>
      <p data-testid='result'>Result: {result}</p>
    </div>
  );
};

export default Calculator;