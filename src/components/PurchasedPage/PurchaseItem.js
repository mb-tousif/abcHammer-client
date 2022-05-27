import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from '../../firebase.init';
import { useAuthState } from "react-firebase-hooks/auth";

const PurchaseItem = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const { register, handleSubmit, formState: { errors }} = useForm();
  const [purchasedProduct, setPurchasedProduct] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const url = `https://sheltered-headland-89528.herokuapp.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchasedProduct(data));
  }, [id]);
  // console.log(purchasedProduct);
  const handleProceedOrder = (data)=>{
    const stockQuantity = parseInt(purchasedProduct.availableQuantity);
    const minQuantity = parseInt(purchasedProduct.minQuantity);
    const purchaseQuantity = data.number
    if(purchaseQuantity < minQuantity || purchaseQuantity > stockQuantity){
      return toast.error("Please cheek Stock and min-quantity to purchase")
    }else{
      const price = purchaseQuantity * parseInt(purchasedProduct.price)
      const order = {
        name: purchasedProduct.name,
        buyer: user.email,
        address: data.address,
        quantity: minQuantity,
        phone: data.phone,
        totalPrice : price,
      };
     fetch("https://sheltered-headland-89528.herokuapp.com/orders", {
       method: "POST",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify(order),
     })
       .then((res) => res.json())
       .then((data) => {
       if(data.success){
        return [navigate("/purchase"),toast.success(`${purchasedProduct.name} Order Proceed`)]
      };
    })
  }
  }
  return (
    <div className="text-primary mt-8">
      <h2 className="text-xl font-bold">
        Purchase item {purchasedProduct.name}
      </h2>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="mx-auto my-auto rounded"
              alt="hero"
              src={purchasedProduct.img}
            />
          </div>
          <div class="divider lg:divider-horizontal"></div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium">
              Before it sold out
              <br class="hidden lg:inline-block" />
              Buy now!
            </h1>
            <p class="mb-8 leading-relaxed">{purchasedProduct.description}</p>
            <div class="flex">
              <h1 className="text-xl text-center mr-8">
              Stock- {purchasedProduct.availableQuantity}
             </h1>
              <h1 className="text-xl text-center">
              Min-Quantity to Buy {purchasedProduct.minQuantity}
             </h1>
            </div>
            <h1 className="text-xl text-center">
              Price Per Quantity {purchasedProduct.price}
             </h1>
            <form onSubmit={handleSubmit(handleProceedOrder)}>
              <span className="mt-2 mb-3 text-xl text-secondary">Provide required info for Purchase!</span><br />
              <input type="number" name="number" {...register("number")} placeholder="Type Quantity" class="input mt-2 input-bordered input-success w-full max-w-xs" />
              <input type="text" name="address" {...register("address",{ required: true })} placeholder="Type your product Delivery Address" class="input mt-2 input-bordered input-success w-full max-w-xs" />
              {errors.address && (<p className="text-red-600"><small>Address is required.</small></p>)}
              <input type="text" name="phone" {...register("phone",{ required: true })} placeholder="Type your active phone number" class="input mt-2 input-bordered input-success w-full max-w-xs" />
              {errors.phone && (<p className="text-red-600"><small>Phone number is required.</small></p>)}
            <button type="submit" class="btn btn-primary mt-4 mx-auto my-auto btn-wide">Proceed Order</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PurchaseItem;
