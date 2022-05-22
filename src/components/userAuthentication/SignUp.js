import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
    <div className="hero bg-base-100 text-primary">
      <div className="hero-content w-full">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="md:text-4xl text-2xl text-secondary font-bold">Sign Up</h1>
              <div className="form-control">
                <label className="label"><span className="label-text text-primary">Name</span></label>
                <input type="text" name='name' placeholder="Type your name" className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text text-primary">Email</span></label>
                <input type="email" name='email' placeholder="Type your email" className="input input-bordered"/>
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text text-primary">Password</span></label>
                <input type="password" name='password' placeholder="Type your password" className="input input-bordered"/>
              </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                <span className="text-gray-600">Already Registered ?</span>
                <Link to='/logIn' className="m-2 btn text-sm font-bold text-primary hover:bg-accent">Log In</Link>
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

export default SignUp;