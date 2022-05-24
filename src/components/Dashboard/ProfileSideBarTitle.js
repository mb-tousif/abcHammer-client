import React, { useEffect, useState } from 'react';
import { BiUserCircle } from "react-icons/bi";
const ProfileSideBarTitle = () => {
     const [currentUsers, setCurrentUsers] = useState([]);
     useEffect(() => {
       const url = "http://localhost:4000/users";
       fetch(url)
         .then((res) => res.json())
         .then((data) => setCurrentUsers(data));
     }, []);
    console.log(currentUsers);
    return (
      <div>
        {currentUsers.map((currentUser) => (
          <div class="flex flex-col items-center mt-6 -mx-2">
            {
              currentUser.img ? <img
              class="object-cover w-24 h-24 mx-2 rounded-full"
              src={currentUser.img}
              alt="avatar"
            /> : <BiUserCircle class="object-cover w-24 h-24 mx-2 rounded-full"/>
            }
            <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
              {currentUser.name}
            </h4>
            <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">
              {currentUser?.email ? currentUser.email : "abc@hammer.com"}
            </p>
          </div>
        ))}
      </div>
    );
};

export default ProfileSideBarTitle;