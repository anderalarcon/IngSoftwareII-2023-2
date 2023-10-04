import React from 'react'

const LandingPage = () => {
  return (
    <div>
        <h1>Landing Page</h1>
        <button disabled={true}>button</button>
        <p data-testid='paragraph' className='blue'>text with color blue</p>
    </div>
  )
}

export default LandingPage