import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import Loading from '../SharedPages/Loading/Loading';
import { toast } from 'react-toastify';


const SignUp = () => {
const { register, handleSubmit, formState: { errors }} = useForm();
const [createUserWithEmailAndPassword, user, loading] =
  useCreateUserWithEmailAndPassword(auth);
const [signInWithGoogle, googleUser, googleLoading] = useSignInWithGoogle(auth);
const [updateProfile, updating] = useUpdateProfile(auth);
const navigate = useNavigate();

  if(loading || googleLoading || updating){
    return <Loading/>
  }

   if (user || googleUser) {
     navigate('/');
   }

  const onSubmit = async (data) => {
    const url = "http://localhost:4000/users";
    fetch(url, {
      method: "POST",
      headers: {"content-type":"application/json"},
      body: JSON.stringify(data),
    })
    .then(res=>res.json())
    .then(user=>{
      console.log(user);
      if(user.success){
        toast.success("User Added!!")
      }else{
        toast.error('User already signed up')
      }
    })
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };

    return (
      <div className="hero bg-base-100 text-primary">
        <div className="hero-content w-full">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="md:text-4xl text-2xl text-secondary font-bold">
                Sign Up
              </h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-primary">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Type your name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <p className="text-red-600">
                      <small>Name is required.</small>
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-primary">Address</span>
                  </label>
                  <input
                    type="text"
                    {...register("address", { required: true })}
                    name="address"
                    placeholder="Type your Address"
                    className="input input-bordered"
                  />
                  {errors.address && (
                    <p className="text-red-600">
                      <small>Address is required.</small>
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-primary">Highest Education Level</span>
                  </label>
                  <input
                    type="text"
                    {...register("education")}
                    name="education"
                    placeholder="Type your Highest Education"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-primary">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", {
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email",
                      },
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                    })}
                    placeholder="Type your email"
                    className="input input-bordered"
                  />
                  {errors.email?.type === "pattern" && (
                    <p className="text-red-600">
                      <small>{errors.email.message}</small>
                    </p>
                  )}
                  {errors.email?.type === "required" && (
                    <p className="text-red-600">
                      <small>{errors.email.message}</small>
                    </p>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-primary">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Type your password"
                    className="input input-bordered"
                    {...register("password", {
                      minLength: {
                        value: 6,
                        message: "Password min-length six characters",
                      },
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                    })}
                  />
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      <small>{errors.password.message}</small>
                    </p>
                  )}
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">
                      <small>{errors.password.message}</small>
                    </p>
                  )}
                </div>
                <div className="form-control mt-6">
                  <input type="submit" value="Sign Up" className="btn btn-primary"/>
                </div>
              </form>
              <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                <span className="text-gray-600">Already Registered ?</span>
                <Link
                  to="/logIn"
                  className="m-2 btn text-sm font-bold text-primary hover:bg-accent"
                >
                  Log In
                </Link>
              </div>
              <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
              </div>
              <div className="">
                <button onClick={()=>signInWithGoogle()} className="btn btn-primary mb-4 w-full max-w-xs">
                  <FcGoogle className="md:w-12 md:h-8 w-8 h-8" />
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SignUp;