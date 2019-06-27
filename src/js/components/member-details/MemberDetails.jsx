import React, { Component } from "react";

class MemberDetails extends Component {
  state = {
    member: {}
  };

  componentDidMount() {
    const apiCall = "https://member-data.beam.dental/searchResults.json";

    fetch(apiCall)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(data => {
        console.log("error: ", data);
      });
  }

  render() {
    return <h1>Test</h1>;
  }
}

export default MemberDetails;
