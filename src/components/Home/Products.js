import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Products = ({product}) => {
    const {_id, name, description, img, price} = product;
    const navigate = useNavigate();

    const navigatePurchase = (id) => {
      navigate(`/purchase/${id}`)
    }

    return (   
    <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800" data-aos="zoom-out">
        <div className="px-4 py-2 md:w-full">
          <h1 className="md:text-2xl text-xl md:font-bold text-primary">{name}</h1>
            <p className="mt-1 text-sm h-44 mx-auto my-auto text-gray-600 dark:text-gray-400">{description}</p>
        </div>
        <img className="w-40 h-28 mt-2 mx-auto my-auto" src={img} alt="HAMMER"/>
        <div className="flex items-center justify-between px-4 py-2 bg-secondary">
            <h1 className="text-lg font-bold text-white">${price}</h1>
            <button className="px-2 py-1 text-xs font-semiBold text-secondary uppercase transition-colors duration-200 transform bg-gray-50 rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"><FaShoppingCart onClick={()=>navigatePurchase(_id)} className="w-8 h-8"/></button>
        </div>
    </div>
    );
};

export default Products;