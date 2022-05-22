import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
     <div className="hero bg-base-100">
        <div className="hero-content w-full">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h1 className="md:text-4xl text-2xl text-secondary font-bold">Log In</h1>
         <div className="form-control">
          <label className="label"><span className="label-text">Email</span></label>
          <input type="text" placeholder="email" className="input input-bordered"/>
         </div>
        <div className="form-control">
          <label className="label"><span className="label-text">Password</span></label>
          <input type="text" placeholder="password" className="input input-bordered"/>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Log In</button>
        </div>
        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
            <span className="text-gray-600">Don't have an account ?</span>
            <Link to='/signUp' className="mx-2 text-sm font-bold text-primary m-2 btn hover:bg-accent">Register</Link>
        </div>
        <div className="flex flex-col w-full border-opacity-50">
          <div className="divider">OR</div>
        </div>
        <div className="">
          <button className="btn btn-primary mb-4 w-full max-w-xs"><FcGoogle className='md:w-12 md:h-8 w-8 h-8'/>Continue with Google</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default LogIn;