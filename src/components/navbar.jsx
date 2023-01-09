import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/city-white-transp.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#5c758900] text-white' >
        <div><Link to="home" smooth={true} offset={50} duration={500}>
            <img src={Logo} alt="Logo" style={{width: '190px'}} /></Link>
        </div>

        {/* menu */}
            <ul className='hidden md:flex'>
                <li>
                <Link to="Home" smooth={true} offset={50} duration={500}>
                Home
                </Link>
                </li>
                <li>                
                <Link to="About" smooth={true} offset={50} duration={500}>
                About
                </Link>
                </li>
                <li>
                <Link to="Skills" smooth={true} offset={50} duration={500}>
                Skills
                </Link>
                </li>
                <li>
                <Link to="615-517-7740" smooth={true} offset={50} duration={500}>
                Call Us: 615-517-7740
                </Link>
                </li>
            </ul>

            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
    </div>
  )
}

export default Navbar