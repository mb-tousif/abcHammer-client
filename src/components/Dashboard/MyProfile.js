import React from 'react';
import { useForm } from 'react-hook-form';
import ProfileSideBarTitle from './ProfileSideBarTitle';

const MyProfile = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }
    return (
      <div className="mx-auto my-auto">
        <h1 className="text-2xl text-primary font-bold">My Profile Details</h1>
        <ProfileSideBarTitle />
        <form onSubmit={handleSubmit(onSubmit)}>
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
              <span className="label-text text-primary">
                Highest Education Level
              </span>
            </label>
            <input
              type="text"
              {...register("education")}
              name="education"
              placeholder="Type your Highest Education"
              className="input input-bordered"
            />
          </div>
        </form>
      </div>
    );
};

export default MyProfile;