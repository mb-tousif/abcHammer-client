import React from 'react';
import ABCHammerLogo from '../../../Assets/Images/logo.png';
import { BsFacebook } from "react-icons/bs";
import { FcFactoryBreakdown } from "react-icons/fc";
import { FaYoutube } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-accent text-primary-focus">
            <div>
                <img src={ABCHammerLogo}  width="50" height="40" viewBox="0 0 24 24" alt="Logo" />
                <p className="font-bold">ABC Hammer Manufacturing Ltd. <br/>Providing reliable Hammer since 1990</p>
                <p>Copyright &#169; {new Date().getFullYear()} - All right reserved.</p>
            </div> 
            <div>
                <div className="grid grid-flow-col md:gap-4">
                <span><a href="https://www.facebook.com/azizul.tousif"><BsFacebook className='w-12 h-8'/></a></span>
                <span><a href="https://www.youtube.com/c/JhankarMahbub"><FaYoutube className='w-12 h-8'/></a></span>
                <span><a href='https://www.abchammers.com/'><FcFactoryBreakdown className='w-12 h-8'/></a></span>
                <span><a href="https://www.linkedin.com/in/azizul-haque-tousif/"><GrLinkedinOption className='w-12 h-8'/></a></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;