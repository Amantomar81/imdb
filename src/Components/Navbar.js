import React from 'react'
import Logo from './logo.png';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
        <div className='border pl-8 flex space-x-8 items-center py-4'>
        <img className='w-[50px] md-w-[80px] object-cover h-12 w-50 ...' src={Logo}/>
        <Link to="/" className='text-blue-400 font-bold text-xl md:text-3xl'>Movies</Link>
        <Link to="/favourites" className='text-blue-400 font-bold text-xl md:text-3xl'>Favourites</Link>
        </div>
    </>
  )
}

export default Navbar
