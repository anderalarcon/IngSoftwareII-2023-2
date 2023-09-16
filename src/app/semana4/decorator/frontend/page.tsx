'use client'
import React, { useState } from 'react'

interface IButtonProps {
    onClick: () => void;
    clickCount:number
} 
// Componente base (Button)
const Button = ({onClick, clickCount}:IButtonProps) => (
    <button onClick={onClick}>
      Click Me ({clickCount} clicks)
    </button>
  );

const ClickLoggerDecorator = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  return (
    <Button onClick={handleClick} clickCount={clickCount} />
  );
}

export default ClickLoggerDecorator