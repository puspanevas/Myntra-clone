import React from 'react'
import { NavLink as Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';
import './Nav.css';
import cartImage from '../Nav/shopping-cart-solid.svg';


export const Nav = () => {
  return (
    <div>
        <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid'>
                <Link className="icon-holder" to="/">
                    <img src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png" alt='logo' />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span></button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/shirts" className="nav-link">Men</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/" className="nav-link">Women</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/" className="nav-link">Kids</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home & Living</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/" className="nav-link">Beauty</Link>
                        </li>

                        <SearchBar />

                        <li className="nav-item">
                            <Link to="/"><img src={cartImage} className='cart-holder' alt="cart-icon" /><span></span></Link>
                        </li>
                    
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

