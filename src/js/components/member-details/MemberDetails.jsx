import React, { Component } from "react";
import BrushPreferences from "../brush-preferences/BrushPreferences.jsx";
import ShippingAddress from "../shipping-address/ShippingAddress.jsx";
import BeamTitle from "../beam-title/BeamTitle.js";

class MemberDetails extends Component {
  state = {
    preferences: {},
    address: {}
  };

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
      <>
        <BeamTitle>Member Details</BeamTitle>
        <BrushPreferences
          brushColor={this.state.preferences.brush_color}
          motorSpeed={this.state.preferences.motor_speed}
          autoOff={this.state.preferences.auto_off}
        />
        <ShippingAddress
          address={this.state.address.shipping_address}
          city={this.state.address.shipping_city}
          state={this.state.address.shipping_state}
          zipCode={this.state.address.shipping_zip_code}
        />
      </>
    );
  }
}

export default MemberDetails;
