import React, { Component } from "react";

class ShippingAddress extends Component {
  render() {
    return (
      <>
        <h1>Shipping Address</h1>
        <div>
          <label htmlFor='shippingAddress'>Address</label>
          <input type='text' id='shippingAddress' />
        </div>
        <div>
          <label htmlFor='shippingCity'>City</label>
          <input type='text' id='shippingCity' />
        </div>
        <div>
          <label htmlFor='shippingState'>State</label>
          <input type='text' id='shippingState' />
        </div>
        <div>
          <label htmlFor='shippingZip'>Zip Code</label>
          <input type='text' id='shippingZip' />
        </div>
      </>
    );
  }
}

export default ShippingAddress;
