'use client'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('/api/semana3')
      .then(async (response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData.items);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [])

  return <div>
    {data.map((employee) => {
        return (
            <p>{employee.fullname}</p>
        )
    })}
  </div>
}

export default page
