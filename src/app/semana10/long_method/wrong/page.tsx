'use client'
import React, { useState } from 'react'

const BadLogin = () => {
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
  const handleLogin = async (e: any) => {
    e.preventDefault()
    if (formData.username === 'usuario' && formData.password === 'contraseña') {
      // Simulación de una solicitud a la base de datos (aquí deberías usar una API real)
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ success: true })
        }, 1000) // Simulación de demora de la solicitud (1 segundo)
      })
      setIsLoggedIn(true)

    } else {
      setError(true)
    }
  }

  if (isLoggedIn) {
    return <p>¡Has iniciado sesión con éxito!</p>
  } else {
    return (
      <div>
        <h2>Iniciar Sesión</h2>
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
        {error && (
          <div>
            <h3>Error</h3>
            <p>Usuario o contraseña incorrectos</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi,
              tempore?
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default BadLogin
