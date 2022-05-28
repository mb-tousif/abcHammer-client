import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { BiUserCircle } from "react-icons/bi";
import { auth } from "../../firebase.init";

const ProfileSideBarTitle = () => {
    const [user] = useAuthState(auth);

    return (
      <div>
          <div class="flex flex-col items-center mt-6 -mx-2">
            {
              user.img ? <img
              class="object-cover w-24 h-24 mx-2 rounded-full"
              src={user.img}
              alt="avatar"
            /> : <BiUserCircle class="object-cover w-24 h-24 mx-2 rounded-full"/>
            }
            <h4 class="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
              {user.displayName}
            </h4>
            <p class="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">
              {user.email ? user.email : "abc@hammer.com"}
            </p>
          </div>
      </div>
    );
};

export default ProfileSideBarTitle;