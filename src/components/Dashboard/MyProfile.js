import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';
import ProfileSideBarTitle from './ProfileSideBarTitle';

const MyProfile = () => {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const [user] = useAuthState(auth);
  const imageBBKey = "3ec31d7ffe1cd690f7779201e43d980a";
  const onSubmit = async (data) => {
    const email = user.email;
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageBBKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const user = {
            address: data.address,
            email: email,
            education: data.education,
            img: img,
          };
          // send to your database
          fetch(
            `https://sheltered-headland-89528.herokuapp.com/user/${email}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
                authorization: `secretToken ${localStorage.getItem(
                  "accessToken"
                )}`,
              },
              body: JSON.stringify(user),
            }
          )
            .then((res) => res.json())
            .then((user) => {
              if (user.insertedId) {
                toast.success("User updated successfully");
                // reset();
              } else {
                toast.error("Failed to update user!");
              }
            });
        }
      });
  };
    return (
      <div className="mx-auto my-auto">
        <h1 className="text-2xl text-primary font-bold">My Profile Details</h1>
        <ProfileSideBarTitle />
        <div className="mx-auto my-auto">
          <form onSubmit={handleSubmit(onSubmit)} >
            <div className="form-control">
              <label className="label">
                <span className="label-text text-primary">Address</span>
              </label>
              <input
                type="text"
                {...register("address", { required: true })}
                name="address"
                placeholder="Type your Address"
                className="input input-bordered w-full max-w-xs"
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
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-primary">Photo</span>
              </label>
              <input
                type="file"
                className="input input-bordered w-full max-w-xs"
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <input
                className="btn w-full bg-secondary max-w-xs text-primary"
                type="submit"
                value="Update User"
              />
            </div>
          </form>
        </div>
      </div>
    );
};

export default MyProfile;