import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    
        const navigate=useNavigate()
        function handleClick(){
            
            navigate('/cards')
        }
    
    return (

        <div
            className="h-screen bg-cover bg-center mx-16 -mt-17 rounded-2xl"
            style={{
                backgroundImage:
                    "url('https://thelodgeslancashire.co.uk/uploads/2024/12/discover-the-world-s-most-sustainable-and-beautiful-eco-friendly-cottage.webp')",
            }}
        >
            {/* Hero Content */}
            <div className=' pt-64 pl-28'>
                <h1 className='text-4xl font-extrabold w-[500px] mt-20 leading-11 pb-2 text-white'>Find Eco-Friendly homes easily</h1>
                <button className='hover:cursor-pointer py-4 px-2 mt-3 bg-green-700 text-white rounded-2xl cursor-pointer' onClick={handleClick}>Explore Now</button>
            </div>
        </div>

    )
}

export default Home
