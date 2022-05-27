import React from 'react';
import { Link } from 'react-router-dom';
import abcLogo from "../../Assets/Images/logo.png";
import { CgLogIn, CgLogOut } from "react-icons/cg";
import { auth } from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

    return (
    <div className="navbar bg-primary text-base-100">
     <div className="navbar-start">
      <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52">
       <li><Link to="/home">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/purchase">Purchase</Link></li>
        <li><Link to="/dashBoard">Dashboard</Link></li>
        <li><Link to="/myPortfolio">My Portfolio</Link></li>
        <li>
          {
            user ? <button onClick={handleSignOut} className="btn btn-ghost"><CgLogOut className='w-10 h-8'/></button>:<Link to="/logIn"><CgLogIn className='w-10 mt-1 h-8'/></Link>
          }
          {user && <Link to="/myPortfolio">{user?.displayName}</Link>}
        </li>
      </ul>
    </div>
    <div className='flex mx-auto my-auto mr-20'>
      <img className="mx-auto my-auto" src={abcLogo} width="50" height="50" alt="Logo" />
      <h2 className='md:p-2 ml-2 md:text-xl font-bold'>ABC Hammer Manufacturing Ltd</h2>
    </div>
   {
     user &&  <div className="navbar-end">
      <label tabIndex="1" htmlFor="dashboardSideBar" className="btn btn-ghost drawer-button lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </label>
    </div>
   }
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      <li><Link to="/home">Home</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
        <li><Link to="/purchase">Purchase</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/myPortfolio">My Portfolio</Link></li>
        {user && <Link to=""><small className='text-center'>{user?.displayName}</small></Link>}
        {
          user ? <button onClick={handleSignOut} className="btn btn-ghost"><CgLogOut className='w-10 h-8'/></button>:<Link to="/logIn"><CgLogIn className='w-10 mt-1 h-8'/></Link>
        }
    </ul>
  </div>
</div>
    );
};

export default Header;