import React from 'react'
import Image from 'next/image';
import logo from "../assets/logo-1.png"
import logo1 from "../assets/footer-v1-img1[1].png"
import Style from '../styles/Footer.module.css';
import { MdOutlineCallEnd} from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationSharp } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { FaPinterestP ,FaWifi} from "react-icons/fa6";
// import { FaWifi } from "react-icons/fa6";
function Footer() {
  return (
    <div>
        <div className={Style.footer}>
            <div className={Style.footerPart1}>
                <div className={Style.footerPart1Cnt1}>
                    <h1>Get In Touch</h1>
                </div>
                <div className={Style.footerPart1Cnt2}>
                    <button>Send A Message</button>
                </div>
            </div>
            <div className={Style.footerPrat2}>
                <div className={Style.footerPart2Cnt1}>
                    <Image src={logo} alt="Path Error"/>
                </div>
                <div className={Style.footerPart2Cnt2}>
                    <div className={Style.footerPart2Cnt2Box1}>
                        <div className={Style.callLogo}><MdOutlineCallEnd /></div>
                        <div>
                            <p>Call anytime</p>
                            <p>+9821-(000)-9630</p>
                        </div>
                    </div>
                    <div className={Style.footerPart2Cnt2Box2}>
                        <div className={Style.emailLogo}><TfiEmail /></div>
                        <div>
                            <p>Send email</p>
                            <p>baosh@company.com</p>
                        </div>
                    </div>
                    <div className={Style.footerPart2Cnt2Box3}>
                        <div className={Style.visitOffice}><IoLocationSharp /></div>
                        <div>
                            <p>Visit Office</p>
                            <p>27 Division St, New York</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.footerUnderLine}>
                <Image src={logo1} alt='Line img'/>
            </div>
            <div className={Style.footerPrat3}>
                <div className={Style.footerPart3Cnt1}>
                    <ul className={Style.footerMenu}>
                        <li><a href='/Home'>Home</a></li> 
                        <li><a href='/About'>About </a></li>
                        <li><a href='/Services'>Services</a></li>
                        <li><a href='/Portfolio'>Portfolio</a></li>
                        <li><a href='/Contact'>Contact</a></li>
                    </ul>
                </div>
                <div className={Style.footerPart3Cnt2}>
                    <a href='/'><CiTwitter/></a>
                    <a href='/'><FaFacebookF/></a>
                    <a href='/'><TiSocialGooglePlus/></a>
                    <a href='/'><FaPinterestP/></a>
                    <a href='/'><FaWifi/></a>
                    <hr/>
                </div>
                <div className={Style.footerPart3Cnt3}>
                    <p>Copyright © 2024 all rights reserved.</p>
                </div>
                <div className={Style.footerPart3Cnt4}>
                    <p> Back To Top</p>
                    <hr/>
                </div>
                <div className={Style.footerPart3Cnt5}></div>
            </div>
        
        </div>
    </div>
  )
}

export default Footer