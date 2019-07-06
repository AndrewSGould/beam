import React, { Component } from "react";
import styled from "styled-components";
import { MdModeEdit, MdSave } from "react-icons/md";

const ColorContainer = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
`;

class ShippingAddress extends Component {
  state = {
    editing: false
  };

  edit = () => {
    this.setState(
      {
        editing: !this.state.editing
      },
      () => {
        if (this.state.editing) console.log("editing is true");
        else console.log("editing is false");
      }
    );
  };

  render() {
    if (this.state.editing)
      return (
        <>
          <form onSubmit={this.handleSubmit}>
            <h1>Shipping Address</h1>
            <ColorContainer>
              <label htmlFor='shippingAddress'>Address</label>
              <input
                type='text'
                id='shippingAddress'
                name='shipping_address'
                value={this.props.address.shipping_address}
                onChange={this.props.handler}
              />
            </ColorContainer>
            <ColorContainer>
              <label htmlFor='shippingCity'>City</label>
              <input
                type='text'
                id='shippingCity'
                name='shipping_city'
                value={this.props.address.shipping_city}
                onChange={this.props.handler}
              />
            </ColorContainer>
            <ColorContainer>
              <label htmlFor='shippingState'>State</label>
              <input
                type='text'
                id='shippingState'
                name='shipping_state'
                value={this.props.address.shipping_state}
                onChange={this.props.handler}
              />
            </ColorContainer>
            <ColorContainer>
              <label htmlFor='shippingZip'>Zip Code</label>
              <input
                type='text'
                id='shippingZip'
                name='shipping_zip_code'
                value={this.props.address.shipping_zip_code}
                onChange={this.props.handler}
              />
            </ColorContainer>
            <input type='submit' value='Submit' onClick={this.edit} />
          </form>
        </>
      );
    else
      return (
        <>
          <h1>
            Shipping Address <MdModeEdit onClick={this.edit} />
          </h1>
          <ColorContainer>
            <label htmlFor='shippingAddress'>Address</label>
            <span>{this.props.address.shipping_address}</span>
          </ColorContainer>
          <ColorContainer>
            <label htmlFor='shippingCity'>City</label>
            <span>{this.props.address.shipping_city}</span>
          </ColorContainer>
          <ColorContainer>
            <label htmlFor='shippingState'>State</label>
            <span>{this.props.address.shipping_state}</span>
          </ColorContainer>
          <ColorContainer>
            <label htmlFor='shippingZip'>Zip Code</label>
            <span>{this.props.address.shipping_zip_code}</span>
          </ColorContainer>
        </>
      );
  }
}

export default ShippingAddress;
