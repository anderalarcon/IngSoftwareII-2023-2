'use client'
import { IPhoto, IPost, IUser } from '@/interfaces/interfaces'
import { fetchEndpoint } from '@/utilities/functions'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [posts, setPosts] = useState<IPost[]>([])
  const [photos, setPhotos] = useState<IPhoto[]>([])

  const renderUsers = () => {
    const slicedUsers = users.slice(0, 5)
    return slicedUsers.map((user:IUser) => {
      return (
        <div>
          <h3>{user?.name}</h3>
          <p>{user?.username}</p>
          <p>{user?.email}</p>
        </div>
      )
    })
  }
  
  useEffect(() => {
    const fetchData = () => {
      fetchEndpoint('https://jsonplaceholder.typicode.com/users/', setUsers)
      fetchEndpoint('https://jsonplaceholder.typicode.com/posts/', setPosts)
      fetchEndpoint('https://jsonplaceholder.typicode.com/photos/', setPhotos)
    }
    fetchData()
  }, [])

  return (
    <div className='container'>
      <div className='users'>
        <h1>Usuarios:</h1>
        {renderUsers()}
      </div>
      <div className='posts'>
        <h1>Posts:</h1>
        <p>Post: {posts[0]?.title}</p>
      </div>
      <div className='photos'>
        <h1>Fotos:</h1>
        <img width={200} height={200} src={photos[0]?.url} alt='Photo' />
      </div>
    </div>
  )
}

export default page
