import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className='navtitle'>
                    <h3 className='text-light'>Kopinews</h3>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="https://dunyan.vercel.app/" target="_blank" rel="noreferrer"><p>About The Creator</p></a>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
