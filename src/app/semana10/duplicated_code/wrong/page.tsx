'use client'
import React, { useEffect, useState } from 'react'

interface User {
  name: string
  email: string
  username: string
}
const UserListBad = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data)
      })
  }, [])

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <div className='user'>
        <h2>{users[0]?.name}</h2>
        <p>Email: {users[0]?.email}</p>
        <p>Nombre de usuario: {users[0]?.username}</p>
      </div>
      <div className='user'>
        <h2>{users[1]?.name}</h2>
        <p>Email: {users[1]?.email}</p>
        <p>Nombre de usuario: {users[1]?.username}</p>
      </div>
      <div className='user'>
        <h2>{users[2]?.name}</h2>
        <p>Email: {users[2]?.email}</p>
        <p>Nombre de usuario: {users[2]?.username}</p>
      </div>
      <div className='user'>
        <h2>{users[3]?.name}</h2>
        <p>Email: {users[3]?.email}</p>
        <p>Nombre de usuario: {users[3]?.username}</p>
      </div>
      <div className='user'>
        <h2>{users[4]?.name}</h2>
        <p>Email: {users[4]?.email}</p>
        <p>Nombre de usuario: {users[4]?.username}</p>
      </div>
    </div>
  )
}

export default UserListBad
