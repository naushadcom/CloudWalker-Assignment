import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbaar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h1><NavLink className="navbar-brand" to="/">CLOUDWALKAR</NavLink></h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                          
                        </ul>
                        <h5>CRUD APP</h5>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbaar
