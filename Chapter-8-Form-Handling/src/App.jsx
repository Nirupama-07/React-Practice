import React from 'react'
import { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [gender, setGender] = useState('')
  const [experience, setExperience] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    console.log("You entered the following data:")
    console.log('Name:', name)
    console.log('Email:', email)
    console.log('Password:', password)
    console.log('Gender:', gender)
    console.log('Experience:', experience)
    console.log('Message:', message)
  }

  let errorMessage = "";
  let color = "";

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length === 0) {
    errorMessage = "";
  } else if (password.length < 8) {
    errorMessage = "Password must be at least 8 characters";
    color = "text-red-600";
  } else if (!hasUppercase) {
    errorMessage = "Add at least one uppercase letter";
    color = "text-red-600";
  } else if (!hasLowercase) {
    errorMessage = "Add at least one lowercase letter";
    color = "text-red-600";
  } else if (!hasNumber) {
    errorMessage = "Add at least one number";
    color = "text-red-600";
  } else if (!hasSpecial) {
    errorMessage = "Add at least one special character";
    color = "text-red-600";
  } else {
    errorMessage = "Strong Password";
    color = "text-green-600";
  }
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-xl w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Registration Form
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            value={name}
            placeholder="Enter Full Name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className={color}>{errorMessage}</p>
          <input
            type="password"
            value={confirmPassword}
            placeholder='Enter password again'
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {confirmPassword !== "" && (
            <p className={password === confirmPassword ? "text-green-600" : "text-red-600"}>
              {password === confirmPassword
                ? "✅ Passwords match"
                : "❌ Passwords do not match"}
            </p>
          )}
          <div>
            <p className="font-semibold mb-2">Gender</p>

            <div className="flex gap-6">

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>

            </div>
          </div>

          <div>
            <p className="font-semibold mb-2">Experience</p>

            <select
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Experience</option>
              <option>Fresher</option>
              <option>2 Years</option>
              <option>3+</option>
            </select>
          </div>

          <div>
            <p className="font-semibold mb-2">Send us a message</p>

            <textarea
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>

          <h2 className="text-center text-xl font-bold text-green-600">
            Welcome, {name}
          </h2>

        </form>
      </div>
    </div>
  )
}

export default App
