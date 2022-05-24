import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ProfileSideBarTitle from './ProfileSideBarTitle';


const Dashboard = () => {
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
              <li>
                <Link to="/dashboard">
                  <ProfileSideBarTitle />
                </Link>
              </li>
              <li>
                <Link to="/dashboard/myOrder" class="mx-4 font-medium">
                  My Order
                </Link>
              </li>
              <li>
                <Link to="/dashboard/addReview" class="mx-4 font-medium">
                  Review us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Dashboard;