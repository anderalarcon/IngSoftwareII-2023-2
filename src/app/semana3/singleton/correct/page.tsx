'use client'
import React, { useEffect, useState } from 'react'
interface IEmployee {
  fullname: string
}
const page = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/semana3')
      .then(async (response) => {
        const jsonData = await response.json()
        setData(jsonData.items)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <div>
      {data.map((employee: IEmployee) => {
        return <p>{employee.fullname}</p>
      })}
    </div>
  )
}

export default page
