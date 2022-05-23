import React from 'react';
import { RiMailSendFill } from "react-icons/ri";
import { toast } from 'react-toastify';
import location from '../../Assets/Images/Location.png'
const ContactUs = () => {
  const handleSendBtn = ()=>{
    toast.success("Your feedback sent Successfully")
  }
  return (
     <section className="text-secondary body-font relative" >
         <h1 className="md:text-3xl text-xl font-bold text-primary">Contact With Us</h1>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"  style={{ backgroundImage: `url(${location})`, backgroundSize: 'cover'}}>
                <div className="bg-neutral relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-bold tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">H-123,Road-ABC <br /> Florida <br />USA</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0 overflow-hidden">
              <h2 className="title-font font-bold tracking-widest     text-xs">EMAIL</h2>
              <span className="p-2 leading-relaxed">hammer@abc.com</span>
              <h2 className="title-font font-bold tracking-widest text-xs  mt-4">PHONE</h2>
              <p className="leading-relaxed">+1345623</p>
            </div>
        </div>
    </div>
    <div className="lg:w-1/3 md:w-1/2 bg-neutral shadow-2xl p-2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-primary text-lg mb-2 font-bold title-font">What you want to know.</h2>
      <div className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-primary">Enter Your Name</label>
        <input type="text" id="name" name="name" className="w-full rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-primary py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-primary">Enter Your Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-primary">Type Your Message</label>
        <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-primary py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button onClick={()=>handleSendBtn()} className="text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg"><RiMailSendFill className='inline-block w-8 h-6'/> Send Us</button>
      <p className="text-xs font-bold text-gray-500 mt-3">Thank you for supporting us.</p>
    </div>
  </div>
  <div class="flex md:ml-auto md:mr-0 justify-center mb-4 items-center flex-shrink-0 space-x-4">
      <button class="bg-accent inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 512 512">
          <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
        </svg>
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="text-xs mb-1">GET Our App</span>
          <span class="title-font font-medium">Google Play</span>
        </span>
      </button>
      <button class="bg-accent inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 h-6" viewBox="0 0 305 305">
          <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
          <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
        </svg>
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="text-xs mb-1">GET Our App</span>
          <span class="title-font font-medium">App Store</span>
        </span>
      </button>
    </div>
</section>
    );
};

export default ContactUs;