import React from 'react'

const Cards = (props) => {
    return (
        <div className='mt-16'>
            <h1 className='text-center text-2xl text-green-600 font-bold'>10 Best Eco-Friendly Home</h1>
            <div className='flex flex-wrap gap-10 mt-8 ml-20 pl-20'>
                {props.cards.map((item) => {
                   return <div className='flex flex-col gap-5 w-75'>

                        <img
                        key={item.id}
                        src={item.image} 
                        className='object-cover rounded h-[300px]' alt="" />
                        <h1 className='text-black font-bold text-2xl'>{item.title}</h1>
                        <p className='text-gray-600'>{item.description }</p>
                    </div>
                })}



            </div>
        </div>
    )
}

export default Cards
