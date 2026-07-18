import React from 'react'

const Responsibilities = (props) => {
    return (
        <div className="relative flex text-center flex-col mt-32 ml-50 mr-50 h-[50vh]">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/056/174/522/small_2x/ocean-blue-water-wave-photo.jpg" className="w-full h-full rounded-2xl" alt="" />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/70 to-transparent"></div>
            <div className="absolute z-10 top-5 left-[40%] text-white">
                <h1 className="text-3xl font-bold">Our Responsibilities</h1>
            </div>
               <div className="absolute z-10 top-25 left-1/2 -translate-x-1/2 w-[90%]">
  <div className="grid grid-cols-4 gap-6">
    {props.responsibility.map((item) => (
      <div
        key={item.id}
        className="h-60 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 shadow-xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-white/30"
      >
        <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
          ✓
        </div>

        <p className="mt-6 text-xl font-semibold text-purple-300 leading-8">
          {item.description}
        </p>
      </div>
    ))}
  </div>
</div>
                
            
        </div>
    )
}

export default Responsibilities
