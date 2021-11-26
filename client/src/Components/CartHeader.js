import React from "react";

const CartHeader = () => {
  return (
    <>
      <div className="main">
        <h1>Cart</h1>
        <table>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QTY</th>
            <th>TOTAL</th>
            <th>REMOVE</th>
          </tr>
        </table>
      </div>
    </>
  );
};

export default CartHeader;
