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
    this.setState({
      editing: !this.state.editing
    });
  };

  render() {
    if (this.state.editing)
      return (
        <>
          <h1>
            Shipping Address <MdSave onClick={this.edit} />
          </h1>
          <ColorContainer>
            <label htmlFor='shippingAddress'>Address</label>
            <input type='text' id='shippingAddress' />
          </ColorContainer>
          <ColorContainer>
            <label htmlFor='shippingCity'>City</label>
            <input type='text' id='shippingCity' />
          </ColorContainer>
          <ColorContainer>
            <label htmlFor='shippingState'>State</label>
            <input type='text' id='shippingState' />
          </ColorContainer>
          <ColorContainer>
            <label htmlFor='shippingZip'>Zip Code</label>
            <input type='text' id='shippingZip' />
          </ColorContainer>
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
            <span>{this.props.address}</span>
          </ColorContainer>
          <ColorContainer>
            <label htmlFor='shippingCity'>City</label>
            <span>{this.props.city}</span>
          </ColorContainer>
          <ColorContainer>
            <label htmlFor='shippingState'>State</label>
            <span>{this.props.state}</span>
          </ColorContainer>
          <ColorContainer>
            <label htmlFor='shippingZip'>Zip Code</label>
            <span>{this.props.zipCode}</span>
          </ColorContainer>
        </>
      );
  }
}

export default ShippingAddress;
