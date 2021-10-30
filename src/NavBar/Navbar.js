import React from 'react'
import {NavLink} from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav>
                <h1>Logo Ozel</h1>
                <div> 
                    <NavLink activeClassName="active" to ="/figura1">Figura 1</NavLink>
                    <NavLink activeClassName="active" to ="/figura2">Figura 2</NavLink>
                </div>
            </nav>  
        </div>
    )
}

export default Navbar
