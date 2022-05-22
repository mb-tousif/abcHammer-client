import React from 'react';
import ABCHammerLogo from '../../../Assets/Images/logo.png';
import { BsFacebook } from "react-icons/bs";
import { FcFactoryBreakdown } from "react-icons/fc";
import { FaCcJcb, FaCcVisa, FaCcMastercard, FaCcPaypal, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <footer class="footer footer-center p-10 bg-accent text-primary-focus">
            <div>
                <img src={ABCHammerLogo}  width="50" height="40" viewBox="0 0 24 24" alt="Logo" />
                <p class="font-bold">ABC Hammer Manufacturing Ltd. <br/>Providing reliable Hammer since 1990</p>
                <p>Copyright &#169; {new Date().getFullYear()} - All right reserved.</p>
            </div> 
            <div>
                <div className="grid grid-flow-col md:gap-4">
                <span><BsFacebook className='w-12 h-8'/></span>
                <span><FaYoutube className='w-12 h-8'/></span>
                <span><FcFactoryBreakdown className='w-12 h-8'/></span>
                <span><FaCcJcb className='w-12 h-8'/></span>
                <span><FaCcVisa className='w-12 h-8'/></span>
                <span><FaCcMastercard className='w-12 h-8'/></span>
                <span><FaCcPaypal className='w-12 h-8'/></span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;