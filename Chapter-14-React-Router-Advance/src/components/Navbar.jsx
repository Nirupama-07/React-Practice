import React from 'react'
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div>


            {/* <div className="absolute inset-0 "></div> */}
            <div className='relative z-10 flex gap-72 bg-amber-100 pl-28 ml-20 mt-2 mr-16 py-2 rounded-4xl'>

                <h1 className='relative z-10 font-bold text-3xl text-green-500'>Pollus</h1>
                <div>
                    <ul className='relative z-10 flex gap-10 pl-20'>
                        <li><NavLink className={({ isActive }) =>
                                isActive
                                ? "text-green-600 font-bold text-2xl "
                                : "text-gray-700 text-2xl font-normal "
                            }
                            to="/">Home
                            </NavLink>
                        </li>
                        <li><NavLink className={({ isActive }) =>
                                isActive
                                ? "text-green-600 font-bold text-2xl "
                                : "text-gray-700 text-2xl font-normal "
                            }
                            to="/about">About
                            </NavLink>
                        </li>
                        <li><NavLink className={({ isActive }) =>
                                isActive
                                ? "text-green-600 font-bold text-2xl "
                                : "text-gray-700 text-2xl font-normal"
                            }
                            to="/cards">Images
                            </NavLink>
                        </li>
                        

                    </ul>
                </div>
                <div>
                    <button className='rounded-[25px]  bg-green-600 text-white text-lg py-3  pr-3 pl-4 font-medium'>Sign up</button>
                </div>
            </div>
        </div>


    )
}

export default Navbar
