import React from 'react';
import { auth } from '../../firebase.init';
import { useAuthState } from "react-firebase-hooks/auth";
const MyProfile = () => {
    const [user] = useAuthState(auth);
    const handleUser=(e)=>{
      e.preventDefault();
      const users = {
        name: e.target.name.value,
        img: e.target.imgLink.value,
        education: e.target.education.value,
        linkedinLink: e.target.phone.value,
        phone: e.target.phone.value,
        address: e.target.address.value,
      };
    }
    return (
        <div className='mx-auto my-auto'>
          <h1 className="text-2xl text-primary font-bold">My Profile Details</h1>
          <form onSubmit={handleUser}>
            <input type="text" name='education' placeholder={user?.education || "Enter your Highest Education"}className="input mx-auto m-2 w-full max-w-xs" /> <br />
            <input type="text" name='name' placeholder={user?.displayName || "Enter your Name"}  className="input mx-auto hover:bg-base-200 m-2 w-full max-w-xs" /> <br />
            <input type="text" name='address' placeholder={user?.address || "Enter your Address"}  className="input mx-auto hover:bg-base-200 m-2 w-full max-w-xs" />
            <br />
            <input name='linkedinLink' type="text" placeholder={user?.linkedinLink || "Enter your linkedinLink"} className="input mx-auto hover:bg-base-200 m-2 w-full max-w-xs" /> <br />
            <input name='linkedinLink' type="text" placeholder={user?.img || "Enter your Image Link"} className="input mx-auto hover:bg-base-200 m-2 w-full max-w-xs" /> <br />
            <input type="tel" name='phone' placeholder="Phone Number" className="input    mx-auto hover:bg-base-200 m-2 w-full max-w-xs" /> <br />
            <input type="submit" value="Submit"  className="input mx-auto btn-accent m-2 w-full max-w-xs" />
          </form>
        </div>
    );
};

export default MyProfile;