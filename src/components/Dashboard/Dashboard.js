import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import { auth } from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
      <div>
        <div class="drawer drawer-mobile">
          <input id="dashboardSideBar" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content">
            <h1 className="text-primary text-3xl font-bold">
              This is ABC Dashboard!
            </h1>
            <Outlet />
          </div>
          <div class="drawer-side">
            <label htmlFor="dashboardSideBar" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
              <li><Link to="/dashboard" class="mx-4 font-medium">My Profile</Link></li>
              {
                admin ? 
                <>
                <li><Link to="/dashboard/manageOrder" class="mx-4 font-medium">Manage Order</Link></li>
                <li><Link to="/dashboard/addProduct" class="mx-4 font-medium">Add Products</Link></li>
                <li><Link to="/dashboard/manageProduct" class="mx-4 font-medium">Manage Product</Link></li>
                <li><Link to="/dashboard/makeAdmin" class="mx-4 font-medium">Make Admin</Link></li>
                </> 
                :
                <>
                <li><Link to="/dashboard/myOrder" class="mx-4 font-medium">My Order</Link></li>
                <li><Link to="/dashboard/addReview" class="mx-4 font-medium">Review us</Link></li>
                </>
              }
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;