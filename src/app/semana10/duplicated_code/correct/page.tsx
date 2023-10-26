'use client'
import React, { useEffect, useState } from 'react'
import { useUsers } from './hooks/useUsers'

interface User {
  name: string
  email: string
  username: string
}

const UserListCorrect = () => {
  const users = useUsers();

  const renderUsers = () => {
    return users?.map((user: User) => (
      <div className='user'>
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Nombre de usuario: {user.username}</p>
      </div>
    ))
  }

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      {renderUsers()}
    </div>
  )
}

export default UserListCorrect
