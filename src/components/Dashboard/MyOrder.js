import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { auth } from '../../firebase.init';
import OrderTableRow from './OrderTableRow';

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
    
    useEffect(()=>{
      if(user){
        fetch(`http://localhost:4000/orders?buyer=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `secretToken ${localStorage.getItem('accessToken')}`
                }
            })
          .then((res) => {
            if(res.status === 403 || res.status === 401){
              return [navigate('/'), toast.error("response status 401 or 403")]
            }
           return res.json();
          })
          .then((data) => setOrders(data));
      }
  },[user])

    return (
      <div>
        <h1 className="text-2xl text-primary font-bold mt-4 mb-2">
          My Order Summery {orders.length}
        </h1>
        <div className="overflow-x-auto">
          <table className="table w-full max-w-xs text-center mx-auto my-auto">
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