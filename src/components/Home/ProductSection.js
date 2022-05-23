import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../SharedPages/Loading/Loading';
import { RiUserVoiceFill } from "react-icons/ri";
import Products from './Products';

const ProductSection = () => {
    const url = "http://localhost:4000/products";
    const { isLoading, data: products } = useQuery('Products', ()=>fetch(url).then((res)=>res.json()));

    if (isLoading) {
      return <Loading/>;
    }

    return (
      <section className="bg-base-100 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl indicator text-3xl font-bold title-font mb-2 text-primary">Hello Guest<span className="indicator-start badge badge-primary"><RiUserVoiceFill/></span></h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-primary font-medium">ABC Hammer Manufacturing Ltd is proud to present the most durable hammers in the world today.</p>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mx-auto my-auto">
            {
                products.map(product=><Products product={product} key={product._id}/>)
            }
          </div>
        </div>
      </section>
    );
};

export default ProductSection;