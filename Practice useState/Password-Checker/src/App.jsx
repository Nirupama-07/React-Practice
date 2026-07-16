import React, { useState } from 'react'

const App = () => {
  const [password, setPassword] = useState("")
  let strength = "";

  if (password.length > 0) {
    if (password.length < 6) {
      strength = "Weak Password";
    } else if (password.length < 10) {
      strength = "Medium Password";
    } else {
      strength = "Strong Password";
    }
  }else{
    strength="Enter password"
  }

  return (
    <div>
      <input type="password" placeholder="Enter password" id='password'
        onChange={(e) => {
          setPassword(e.target.value)
        }}
      />
      <p>
        {strength}
      </p>
    </div>
  )
}

export default App
