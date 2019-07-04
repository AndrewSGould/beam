import React, { Component } from "react";
import ColorSwatch from "../color-swatch/ColorSwatch.js";
import styled from "styled-components";

const SwatchName = styled.span`
  text-transform: capitalize;
`;

const ColorContainer = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
`;

class BrushPreferences extends Component {
  render() {
    return (
      <>
        <h1>Brush Preferences</h1>
        <ColorContainer>
          <label>Brush Color</label>
          <span>
            <ColorSwatch color={this.props.brushColor} />
            <SwatchName>{this.props.brushColor}</SwatchName>
          </span>
        </ColorContainer>
        <ColorContainer>
          <label>Motor Speed</label>
          <span>
            <span>{this.props.motorSpeed}</span>
          </span>
        </ColorContainer>
        <ColorContainer>
          <label>Auto Off</label>
          <span>
            <span>{this.props.autoOff ? "Yes" : "No"}</span>
          </span>
        </ColorContainer>
      </>
    );
  }
}

export default BrushPreferences;
