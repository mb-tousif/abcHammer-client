import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import OrderTableRow from './OrderTableRow';

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
    
    useEffect(()=>{
      if(user){
        fetch(`http://localhost:4000/orders?buyer=${user.email}`)
          .then((res) => res.json())
          .then((data) => setOrders(data));
      }
  },[user])

    return (
      <div>
        <h1 className="text-2xl text-primary font-bold mt-4 mb-2">
          My Order Summery {orders.length}
        </h1>
        <div className="overflow-x-auto">
          <table className="table md:w-4/6 text-center mx-auto my-auto">
            <thead>
              <tr>
                <th>SL No.</th>
                <th>Product Name</th>
                <th>Total Quantity</th>
                <th>Total Price</th>
                <th>Manage Order</th>
              </tr>
            </thead>
            {orders?.map((order, index) => (
              <OrderTableRow key={order._id} index={index} order={order} />
            ))}
          </table>
        </div>
      </div>
    );
};

export default MyOrder;