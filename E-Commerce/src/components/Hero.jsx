import React from 'react'

const Hero = () => {
    return (
        <div>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://wallpaperaccess.com/full/1496231.jpg" className="d-block w-100 image" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.pinimg.com/originals/0f/37/a3/0f37a3bf0ac5abc1296fc533f2f8402d.jpg" className="d-block w-100 image" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://5desktop.com/download/wallpaper_268918_2560x1600.jpg?download" className="d-block w-100 image" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Hero
