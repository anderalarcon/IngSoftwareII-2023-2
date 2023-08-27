'use client'
import React, { useEffect, useState } from 'react'

interface User {
  name: string
  username: string
  email: string
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
        <img src={photos[0]?.url} alt='Photo' />
      </div>
    </div>
  )
}

export default page
