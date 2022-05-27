import React from 'react';
import { FcCancel } from "react-icons/fc";
import { GrUserAdmin } from "react-icons/gr";
import { toast } from 'react-toastify';
const UserRow = ({user,index, refetch}) => {
     const { email } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:4000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `secretToken ${localStorage.getItem('accessToken')}`
            }
        })
            // .then(res => res.json())
            // .then(data => {
            //     console.log(data);
            // })

        .then(res => {
            if(res.status === 403){
                toast.error('General user can not make Admin');
            }
            return res.json()})
        .then(data => {
            if (data.modifiedCount > 0) {
                refetch();
                toast.success(`Successfully made an admin`);
            }
        })
    }
    return (
      <>
        <tbody>
          <tr className="hover">
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
              <button onClick={makeAdmin} class="btn mr-2 tooltip hover:tooltip-open tooltip-left" data-tip="Make Admin">
                <GrUserAdmin className="w-8 h-8" /> 
              </button>
            </td>
            <td>
              <button class="btn mr-2 tooltip hover:tooltip-open tooltip-top" data-tip="Delete Admin">
                <FcCancel className="w-8 h-8" />
              </button>
            </td>
          </tr>
        </tbody>
      </>
    );
};

export default UserRow;