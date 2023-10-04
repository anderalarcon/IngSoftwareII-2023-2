'use client'
import React, { useEffect, useState } from 'react'
interface Post {
  id: number
  title: string
}
const LandingPageWithFecth = () => {
  const [data, setData] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/2')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((responseData) => {
        setData(responseData)
        setLoading(false)
      })
      .catch((fetchError) => {
        setError(fetchError.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      <h1>Post Data</h1>
      <p data-testid='post-id'>Post ID: {data?.id}</p>
      <p data-testid='post-title'>Post Title: {data?.title}</p>
    </div>
  )
}

export default LandingPageWithFecth
