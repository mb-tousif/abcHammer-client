import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const PurchaseItem = () => {
  const { id } = useParams();
  const [purchasedProduct, setPurchasedProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:4000/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPurchasedProduct(data));
  }, [id]);
  // console.log(purchasedProduct);
  const handleProceedOrder = (e)=>{
    e.preventDefault()
    const stockQuantity = parseInt(purchasedProduct.availableQuantity);
    const minQuantity = parseInt(purchasedProduct.minQuantity);
    const purchaseQuantity = e.target.number.value;
    if(purchaseQuantity < minQuantity || purchaseQuantity > stockQuantity){
      return toast.error("Please cheek Stock and min-quantity to purchase")
    }else{
      return toast.success(`Total price of product ${purchaseQuantity * parseInt(purchasedProduct.price)} and get your product throw your Sign up address within 2 Days!`)
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
            <form onSubmit={handleProceedOrder}>
              <input type="number" name="number" placeholder="Type Quantity" class="input mt-2 input-bordered input-success w-full max-w-xs" />
            <button type="submit" class="btn btn-primary mt-4 mx-auto my-auto btn-wide">Proceed Order</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PurchaseItem;
