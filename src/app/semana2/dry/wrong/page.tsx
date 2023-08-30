'use client'
import { IPhoto, IPost, IUser } from '@/interfaces/interfaces'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [posts, setPosts] = useState<IPost[]>([])
  const [photos, setPhotos] = useState<IPhoto[]>([])

  useEffect(() => {
    const fetchUsers = () => {
      fetch('https://jsonplaceholder.typicode.com/users/')
        .then((response) => response.json())
        .then((json) => setUsers(json))
    }

    const fetchPosts = () => {
      fetch('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => response.json())
        .then((json) => setPosts(json))
    }

    const fetchPhotos = () => {
      fetch('https://jsonplaceholder.typicode.com/photos/')
        .then((response) => response.json())
        .then((json) => setPhotos(json))
    }
    fetchUsers()
    fetchPosts()
    fetchPhotos()
  }, [])

  return (
    <div className='container'>
      <div className='users'>
        <h1>Usuarios:</h1>
        <div>
          <h3>{users[0]?.name}</h3>
          <p>{users[0]?.username}</p>
          <p>{users[0]?.email}</p>
        </div>
        <div>
          <h3>{users[1]?.name}</h3>
          <p>{users[1]?.username}</p>
          <p>{users[1]?.email}</p>
        </div>
        <div>
          <h3>{users[2]?.name}</h3>
          <p>{users[2]?.username}</p>
          <p>{users[2]?.email}</p>
        </div>
        <div>
          <h3>{users[3]?.name}</h3>
          <p>{users[3]?.username}</p>
          <p>{users[3]?.email}</p>
        </div>
        <div>
          <h3>{users[4]?.name}</h3>
          <p>{users[4]?.username}</p>
          <p>{users[4]?.email}</p>
        </div>
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
