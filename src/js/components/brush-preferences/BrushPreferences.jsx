import React, { Component } from "react";
import ColorSwatch from "../color-swatch/ColorSwatch.js";
import styled from "styled-components";

const SwatchName = styled.span`
  text-transform: capitalize;
`;

const LabelValueContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;

  > span {
    margin-bottom: 16px;
  }
`;

class BrushPreferences extends Component {
  render() {
    return (
      <div style={{ width: "80%" }}>
        <h1>Brush Preferences</h1>
        <LabelValueContainer>
          <label>Brush Color</label>
          <span>
            <ColorSwatch color={this.props.brushColor} />{" "}
            <SwatchName>{this.props.brushColor}</SwatchName>
          </span>
        </LabelValueContainer>
        <LabelValueContainer>
          <label>Motor Speed</label>
          <span>{this.props.motorSpeed}</span>
        </LabelValueContainer>
        <LabelValueContainer>
          <label>Auto Off</label>
          <span>{this.props.autoOff ? "Yes" : "No"}</span>
        </LabelValueContainer>
      </div>
    );
  }
}

export default BrushPreferences;
