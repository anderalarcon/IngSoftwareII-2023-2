import { useEffect, useState } from 'react'

interface User {
  name: string
  email: string
  username: string
}

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('La solicitud no pudo completarse.')
        }
        return response.json()
      })
      .then((data) => {
        const firstFiveUsers = data.slice(0, 5)
        setUsers(firstFiveUsers)
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error)
      })
  }, [])

    return users
}
