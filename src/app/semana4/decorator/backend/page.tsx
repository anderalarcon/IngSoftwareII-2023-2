'use client'
import React, { useEffect } from 'react'
import axios from 'axios'

const page = () => {
  useEffect(() => {
    const signIn = async () => {
      const response = await axios.get('/api/semana4', {
        params: { username: 'usuario', password: 'contraseña' }
      })
      console.log(response?.data);
    }
    signIn()

  }, [])
  return <div>page</div>
}

export default page
