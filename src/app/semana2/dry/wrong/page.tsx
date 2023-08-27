'use client'
import React, { useEffect, useState } from 'react'

interface User {
  name: string
}

interface Post {
  title: string
}

interface Photo {
  url: string
}

const page = () => {
  const [users, setUsers] = useState<User[]>([])
  const [posts, setPosts] = useState<Post[]>([])
  const [photos, setPhotos] = useState<Photo[]>([])

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
    <div className='main'>
      <div className='users'>
        <h1>Usuarios:</h1>
        <ul>
          <li>Nombre usuario: {users[0]?.name}</li>
          <li>Nombre usuario: {users[1]?.name}</li>
          <li>Nombre usuario: {users[2]?.name}</li>
        </ul>
      </div>
      <div className='posts'>
        <h1>Posts:</h1>
        <ul>
          <li>Post: {posts[0]?.title}</li>
          <li>Post: {posts[1]?.title}</li>
          <li>Post: {posts[2]?.title}</li>
        </ul>
      </div>
      <div className='photos'>
        <h1>Fotos:</h1>
        <ul>
          <li>
            <img src={photos[0]?.url} alt='Photo' />
          </li>
          <li>
            <img src={photos[1]?.url} alt='Photo' />
          </li>
          <li>
            <img src={photos[2]?.url} alt='Photo' />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default page
