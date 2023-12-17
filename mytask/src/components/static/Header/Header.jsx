import React from 'react'
import './header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-2">
                    <div className="logo">
                        <Link to='/'>MN201</Link>
                    </div>
                </div>
                <div className="col-lg-10">
                    <nav>
                        <NavLink to='/'>Ana sehife</NavLink>
                        <NavLink to='/products'>Mehsullar</NavLink> 
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}
 
export default Header