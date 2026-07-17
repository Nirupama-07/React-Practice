import React, { useState } from 'react'
import Cards from './components/Cards'

const App = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [city, setCity] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    console.log(name)
    console.log(age)
    console.log(city)

    setName("")
    setAge(0)
    setCity("")
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="bg-white shadow-xl rounded-xl p-8 flex gap-10 w-full max-w-5xl">

        {/* Form */}
        <div className="w-1/2">
          <h1 className="text-3xl font-bold text-blue-600 mb-6">
            Profile Form
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="number"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select City</option>
              <option value="Bhubaneswar">Bhubaneswar</option>
              <option value="Cuttack">Cuttack</option>
              <option value="Puri">Puri</option>
            </select>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>

          </form>
        </div>

        {/* Profile Card */}
        <div className="w-1/2 flex items-center justify-center">
          <Cards
            name={name}
            age={age}
            city={city}
          />
        </div>

      </div>
    </div>
  )
}

export default App
