import React from 'react'

const DestinationCard = (props) => {
    return (
        <div className="grid grid-cols-4 gap-4 mt-10 ">
            {props.destinationCardsImages.map((item) => (
                <div
                    key={item.id}
                    className={`relative overflow-hidden rounded-2xl transition-transform hover:-translate-y-2 ${item.id === 1
                            ? "row-span-2 h-125"
                            : item.id === 3
                                ? "row-span-2 h-125"
                                : "h-60"
                        }`}
                >
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover "
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Text */}
                    <div className="absolute bottom-5 left-5 text-white z-10">
                        <h2 className="text-2xl font-bold uppercase">
                            {item.title}
                        </h2>
                        <p className="text-lg">{item.location}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DestinationCard
