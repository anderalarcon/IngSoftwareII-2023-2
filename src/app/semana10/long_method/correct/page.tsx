'use client'
import React, { useState } from 'react'

const GoodLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState(false)

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const validateCredentials = async () => {
    try {
      if (
        formData.username === 'usuario' &&
        formData.password === 'contraseña'
      ) {
        const response = await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ success: true })
          }, 1000) // Simulación de demora de la solicitud (1 segundo)
        })
        if (response.success) {
          setIsLoggedIn(true)
        } else {
          setError(true)
        }
      } else {
        setError(true)
      }
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  const validateInputs = () => {
    if (formData?.username === '' || formData?.password === '') {
      setError(true)
    }
  }
  
  const handleLogin = async (e: any) => {
    e.preventDefault()
    validateInputs()
    if (!error) {
      await validateCredentials()
    }
  }

  const renderError = () => {
    if (error) {
      return (
        <div>
          <h3>Error</h3>
          <p>Usuario o contraseña incorrectos</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
            tempore?
          </p>
        </div>
      )
    }
  }

  const renderForm = () => {
    return (
      <form>
        <div>
          <label>Usuario:</label>
          <input
            type='text'
            name='username'
            value={formData?.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type='password'
            name='password'
            value={formData?.password}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleLogin}>Iniciar Sesión</button>
      </form>
    )
  }

  if (isLoggedIn) {
    return <p>¡Has iniciado sesión con éxito!</p>
  } else {
    return (
      <div>
        <h2>Iniciar Sesión</h2>
        {renderForm()}
        {renderError()}
      </div>
    )
  }
}

export default GoodLogin
