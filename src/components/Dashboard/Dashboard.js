import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h1 className="text-primary text-3xl font-bold">This is ABC Dashboard!</h1>
            <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">Brand</h2>
        {/* ----------layout--------- */}
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><a><div class="flex flex-col items-center mt-6 -mx-2">
            <img class="object-cover w-24 h-24 mx-2 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar"/>
            <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">John Doe</h4>
            <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">john@example.com</p>
        </div></a></li>
      <li><span class="mx-4 font-medium">Dashboard</span></li>
      <li><span class="mx-4 font-medium">Dashboard</span></li>
      <li><span class="mx-4 font-medium">Dashboard</span></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;