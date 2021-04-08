import React from "react";

const OrderDetails = ({order}) => {
    const {name, email, price , orderTime} = order;
  return (
     
    <div>
      <table class="table">
        <tbody>
          <tr>
            <td>{name}</td>
            <td> {email} </td>
            <td> {orderTime} </td>
            <td> {price}</td>
          </tr>
         
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;
