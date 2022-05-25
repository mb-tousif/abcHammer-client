import React from 'react';

const UpdateProfile = () => {
    return (
        <div>
             <form>
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

export default UpdateProfile;