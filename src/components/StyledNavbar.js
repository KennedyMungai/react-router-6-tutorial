import React from 'react'
import { NavLink } from 'react-router-dom'

const StyledNavbar = () =>
{
    return (
        <nav className="navbar">
            <NavLink to='/' style={({ isActive }) => { return { color: isActive ? 'red' : 'gray' } }}>Home</NavLink>
            <NavLink to='/about' style={({ isActive }) => { return { color: isActive ? 'red' : 'gray' } }}>About</NavLink>
            <NavLink to='/products' style={({ isActive }) => { return { color: isActive ? 'red' : 'gray' } }}>Products</NavLink>
        </nav>
    )
}

export default StyledNavbar