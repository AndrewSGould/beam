import React, { Component } from "react";
import ReactDOM from "react-dom";

import MemberDetails from "./components/member-details/MemberDetails.jsx";

class App extends Component {
  render() {
    return (
      <>
        <noscript>You need to enable JavaScript to run this website!</noscript>
        <main>
          <MemberDetails />
        </main>
        <footer />
      </>
    );
  }
}

export default App;

const wrapper = document.getElementById("main-body");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
