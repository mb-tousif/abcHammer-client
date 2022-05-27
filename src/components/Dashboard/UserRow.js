import React from 'react';
import { FcCancel } from "react-icons/fc";
import { GrUserAdmin } from "react-icons/gr";
const UserRow = ({user,index, refetch}) => {
    const {email} = user;
    return (
      <>
        <tbody>
          <tr className="hover">
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
              <button class="btn mr-2 tooltip hover:tooltip-open tooltip-left" data-tip="Make Admin">
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