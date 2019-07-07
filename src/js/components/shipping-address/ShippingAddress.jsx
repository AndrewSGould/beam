import React, { Component } from "react";
import styled from "styled-components";
import { MdModeEdit, MdSave } from "react-icons/md";
import Input from "@material-ui/core/Input";

const LabelValueContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  align-items: center;

  > span,
  div {
    margin-bottom: 16px;
  }
`;

const EditableHeader = styled.h1`
  > svg {
    opacity: 0.3;
    vertical-align: middle;

    &:hover {
      opacity: 1;
      cursor: pointer;
    }
  }

  user-select: none;
`;

class ShippingAddress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };

    this.submit = React.createRef();
    this.simulateClick = this.simulateClick.bind(this);
    this.edit = this.edit.bind(this);
  }

  simulateClick = () => {
    this.submit.current.click();
  };

  edit = e => {
    e.preventDefault();
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
        <div style={{ width: "80%" }}>
          <form>
            <EditableHeader>
              Shipping Address <MdSave onClick={this.simulateClick} />
              <Input
                type='submit'
                value='Submit'
                onClick={this.edit}
                ref={this.submit}
                style={{ display: "none" }}
              />
            </EditableHeader>
            <LabelValueContainer>
              <label htmlFor='shipping_address'>Address</label>
              <Input
                type='text'
                id='shipping_address'
                name='shipping_address'
                value={this.props.address.shipping_address}
                onChange={this.props.handler}
              />
            </LabelValueContainer>
            <LabelValueContainer>
              <label htmlFor='shipping_city'>City</label>
              <Input
                type='text'
                id='shipping_city'
                name='shipping_city'
                value={this.props.address.shipping_city}
                onChange={this.props.handler}
              />
            </LabelValueContainer>
            <LabelValueContainer>
              <label htmlFor='shipping_state'>State</label>
              <Input
                type='text'
                id='shipping_state'
                name='shipping_state'
                value={this.props.address.shipping_state}
                onChange={this.props.handler}
              />
            </LabelValueContainer>
            <LabelValueContainer>
              <label htmlFor='shipping_zip_code'>Zip Code</label>
              <Input
                type='text'
                id='shipping_zip_code'
                name='shipping_zip_code'
                value={this.props.address.shipping_zip_code}
                onChange={this.props.handler}
              />
            </LabelValueContainer>
          </form>
        </div>
      );
    else
      return (
        <div style={{ width: "80%" }}>
          <EditableHeader>
            Shipping Address <MdModeEdit onClick={this.edit} />
          </EditableHeader>
          <LabelValueContainer>
            <label>Address</label>
            <span>{this.props.address.shipping_address}</span>
          </LabelValueContainer>
          <LabelValueContainer>
            <label>City</label>
            <span>{this.props.address.shipping_city}</span>
          </LabelValueContainer>
          <LabelValueContainer>
            <label>State</label>
            <span>{this.props.address.shipping_state}</span>
          </LabelValueContainer>
          <LabelValueContainer>
            <label>Zip Code</label>
            <span>{this.props.address.shipping_zip_code}</span>
          </LabelValueContainer>
        </div>
      );
  }
}

export default ShippingAddress;
