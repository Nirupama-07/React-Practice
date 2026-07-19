import React, { useEffect, useState } from 'react'

const App = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState('')


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()

        setUsers(data)

      } catch (error) {
        setErrors("Failed to fetch")
      } finally {
        setLoading(false)
      }

    }
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (errors) {
    return <h1>{errors}</h1>;
  }
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {users.map((user) => (
        <div
          key={user.id}
          className="w-72 bg-pink-900 text-white rounded-xl p-5 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-xl font-bold mb-4">{user.name}</h2>

          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">Email:</span> {user.email}</p>
            <p><span className="font-semibold">Phone:</span> {user.phone}</p>
            <p><span className="font-semibold">Company:</span> {user.company.name}</p>
            <p><span className="font-semibold">Website:</span> {user.website}</p>
            <p><span className="font-semibold">City:</span> {user.address.city}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
