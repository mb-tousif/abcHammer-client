import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = (data) => {   
        // const userName = e.target.name.value;
        // const comment = e.target.comment.value;
        // const img = e.target.img.value;
        // const address = e.target.address.value;
        // const newReview = {  comment, img, address };
        console.log( data);
      const url = "https://sheltered-headland-89528.herokuapp.com/reviews";
      fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((review) => {
          console.log(review);
          if (review.success) {
           return toast.success("Review Added!!");
          }
        });
    };

    return (
        <div>
            <h1 className="text-2xl text-primary font-bold">Share your Experience!</h1>
            <div class="max-w-xs mx-auto p-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name='name' {...register("name", { required: true })} placeholder="Type your name" class="input input-bordered input-primary w-full max-w-xs mt-2 mb-2"/>
                {
                errors.name && (<p className="text-red-600"><small>Name is required.</small></p>)
                }
                <input type="text" name='img' {...register("img", { required: true })} placeholder="Enter your photo URL" class="input input-bordered input-primary w-full max-w-xs mt-2 mb-2"/>
                {
                errors.img && (<p className="text-red-600"><small>Photo URL is required.</small></p>)
                }
                <input type="text" name='address' {...register("address", { required: true })} placeholder="Enter your address" class="input input-bordered input-primary w-full max-w-xs mt-2 mb-2"/>
                {
                errors.address && (<p className="text-red-600"><small>Address is required.</small></p>)
                }
                <textarea name='comment' {...register("comment", { required: true })} class="textarea textarea-success w-full max-w-xs mt-2 mb-2" placeholder="Type your Review"></textarea> <br />
                {
                errors.comment && (<p className="text-red-600"><small>Comment is required.</small></p>)
                }
                <input type="submit" value="Submit your Review" class="input input-bordered btn-primary w-full max-w-xs mt-2 mb-2" />
              </form>
            </div>
        </div>
    );
};

export default AddReview;