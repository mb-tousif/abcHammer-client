import React from 'react';
import { FcMoneyTransfer, FcCancel } from "react-icons/fc";
const OrderTableRow = ({order, index}) => {
    const {name, totalPrice, quantity} = order;
    return (
      <>
        <tbody>
          <tr className="hover">
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{totalPrice}</td>
            <td>
              <div class="tooltip hover:tooltip-open tooltip-bottom" data-tip="Payment">
                <button class="btn mr-2 btn-sm">
                  <FcMoneyTransfer className='w-6 h-6' />
                </button>
              </div>
              <div class="tooltip hover:tooltip-open tooltip-top" data-tip="Del Order">
                <button class="btn mr-2 btn-sm">
                  <FcCancel className='w-6 h-6' />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </>
    );
};

export default OrderTableRow;