import React from 'react'

const Hero = () => {
    return (
        <div>
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img
                            src="https://wallpaperaccess.com/full/1496231.jpg"
                            className="d-block w-100 image"
                            alt="Fashion Collection"
                        />

                        <div className="carousel-caption">
                            <h1>Summer Fashion 2026</h1>
                            <p>Discover trendy outfits at unbeatable prices.</p>
                            <button className="btn btn-warning btn-lg">
                                Shop Now
                            </button>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            src="https://i.pinimg.com/originals/0f/37/a3/0f37a3bf0ac5abc1296fc533f2f8402d.jpg"
                            className="d-block w-100 image"
                            alt="Women's Collection"
                        />

                        <div className="carousel-caption">
                            <h1>Exclusive Women's Collection</h1>
                            <p>Up to 50% OFF on premium brands.</p>
                            <button className="btn btn-warning btn-lg">
                                Explore
                            </button>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img
                            src="https://5desktop.com/download/wallpaper_268918_2560x1600.jpg?download"
                            className="d-block w-100 image"
                            alt="New Arrivals"
                        />

                        <div className="carousel-caption">
                            <h1>New Arrivals</h1>
                            <p>Fresh styles for every occasion.</p>
                            <button className="btn btn-warning btn-lg">
                                View Collection
                            </button>
                        </div>
                    </div>

                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon"></span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    )
}

export default Hero
