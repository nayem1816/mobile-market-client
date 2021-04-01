import React from "react";

const OrdersBody = (props) => {
    const {name, dateAndTime, price} = props.order;
  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{dateAndTime}</td>
        <td>${price}</td>
      </tr>
    </tbody>
  );
};

export default OrdersBody;
