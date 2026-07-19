import React, { useEffect, useState } from 'react'

const App = () => {
  function theme() {
    if (toggle) {
      return "bg-black text-white";
    }

    return "bg-white text-blue-600";
  }
  const [toggle, setToggle] = useState(() => {
    const data = localStorage.getItem("toggle");
    return data ? JSON.parse(data) : false;
  });


  useEffect(() => {
    localStorage.setItem("toggle", JSON.stringify(toggle))
  }, [toggle])
  
  return (
    <div className={`${theme()} flex justify-between text-2xl font-bold pt-5 pb-4 px-3 min-h-screen`}>
      <h1 className="pl-5 pt-3">
        {toggle ? "Dark Mode" : "Light Mode"}
      </h1>

      <button
        className="py-3 px-3 rounded-2xl cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        Toggle
      </button>
    </div>
  )
}

export default App
