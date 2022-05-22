import React from 'react';
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
    return (
     <div class="hero bg-base-100">
        <div class="hero-content w-full">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <h1 class="md:text-4xl text-2xl text-secondary font-bold">Log In</h1>
         <div class="form-control">
          <label class="label"><span class="label-text">Email</span></label>
          <input type="text" placeholder="email" class="input input-bordered"/>
         </div>
        <div class="form-control">
          <label class="label"><span class="label-text">Password</span></label>
          <input type="text" placeholder="password" class="input input-bordered"/>
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">Log In</button>
        </div>
        <div class="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
            <span class="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>
            <span href="#" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</span>
        </div>
        <div class="flex flex-col w-full border-opacity-50">
          <div class="divider">OR</div>
        </div>
        <div className="">
          <button class="btn btn-primary mb-4 w-full max-w-xs"><FcGoogle className='md:w-12 md:h-8 w-8 h-8'/>Continue with Google</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default LogIn;