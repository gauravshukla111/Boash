"Use client"
import React from 'react'
import style from '../styles/Navbar.module.css'

import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/logo-1.png'
import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";


// import Home from '../Home/page';

function Navbar() {
  return (
    <div className={style.navhead}>               
        <nav className={style.navcontent}>
            <Image src={logo}/>
        <ul className={style.navlistcontent}>
            <li><Link href='/'>HOME +</Link></li>
            <li><Link href='/About'>ABOUT</Link></li>
            <li><Link href='/Services'>SERVICES +</Link></li>
            <li><Link href='/Portfolio'>PORTFOLIO +</Link></li>
            <li><Link href='/Contact'>CONTACT</Link></li>
        </ul>
        <div className={style.icons}>
        <div className="searchicon"><FaSearch /></div>
        <div className="more"><IoMenu /></div>
        </div>
        

        </nav>
       
     
    </div>
  )
}

export default Navbar;
