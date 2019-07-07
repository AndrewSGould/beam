import React, { Component } from "react";
import BrushPreferences from "../brush-preferences/BrushPreferences.jsx";
import ShippingAddress from "../shipping-address/ShippingAddress.jsx";
import BeamTitle from "../beam-title/BeamTitle.js";
import styled from "styled-components";

const MemberDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 30% 1fr;
  justify-items: center;
  max-width: 900px;
  margin: 0 auto;

  > h1:first-child {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  @media screen and (max-width: 850px) {
    grid-template-columns: 100%;
    grid-template-rows: 20% 1fr 1fr;

    > h1:first-child {
      grid-column-start: 1;
      grid-column-end: 1;
    }
  }
`;

class MemberDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preferences: {},
      address: {}
    };

    this.getValidRecord = this.getValidRecord.bind(this);
    this.getMemberRecord = this.getMemberRecord.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  getValidRecord = data => {
    return data
      .filter(
        record =>
          record.primary_insured_id == null && record.terminated_at == null
      )
      .sort(record => record.effective_date)[0];
  };

  getMemberRecord = (data, memberId) => {
    return data.find(member => member.member_id === memberId);
  };

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      address: {
        ...this.state.address,
        [name]: value
      }
    });
  };

  componentDidMount() {
    const apiCall = "https://member-data.beam.dental/searchResults.json";

    fetch(apiCall)
      .then(response => {
        return response.json();
      })
      .then(searchResults => {
        let result = this.getValidRecord(searchResults);

        this.setState({
          address: result
        });

        fetch("https://member-data.beam.dental/memberPreferences.json")
          .then(response => {
            return response.json();
          })
          .then(memberResults => {
            this.setState({
              preferences: this.getMemberRecord(memberResults, result.id)
            });
          })
          .catch(memberResults => {
            console.error("error: ", memberResults);
          });
      })
      .catch(searchResults => {
        console.error("error: ", searchResults);
      });
  }

  render() {
    return (
      <MemberDetailsContainer>
        <BeamTitle>Member Details</BeamTitle>
        <BrushPreferences
          brushColor={this.state.preferences.brush_color}
          motorSpeed={this.state.preferences.motor_speed}
          autoOff={this.state.preferences.auto_off}
        />
        <ShippingAddress
          address={this.state.address}
          handler={this.changeHandler}
        />
      </MemberDetailsContainer>
    );
  }
}

export default MemberDetails;
