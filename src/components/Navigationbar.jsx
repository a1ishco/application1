import React from 'react'
import "./styles.css"
import { Link } from 'react-router-dom'

export default function Navigationbar() {
    return (
        <div className='nav bg-dark pt-1'>
            <Link to="/" className='site-title'>Weather APP</Link>
            <ul className='mx-auto'>
                <li><Link to="/">Home </Link></li>
                <li><Link to="/location"> Weather Today</Link></li>
                <li><Link to="/forecast"> Forecast</Link></li>
            
            </ul>
            Navigationbar</div>
    )
}
