import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top shadow">
                <div className="container">

                    <a className="navbar-brand fw-bold fs-3" href="#">
                        🛍️ ShopEase
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <div className="navbar-nav ms-auto align-items-center">

                            <a className="nav-link active" href="#">
                                Home
                            </a>

                            <a className="nav-link" href="#">
                                Products
                            </a>

                            <a className="nav-link" href="#">
                                Wishlist
                            </a>

                            <a className="nav-link" href="#">
                                Orders
                            </a>

                            <button className="btn btn-warning ms-lg-3">
                                Login
                            </button>

                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
