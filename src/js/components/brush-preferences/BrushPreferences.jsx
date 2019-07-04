import React, { Component } from "react";
import ColorSwatch from "../color-swatch/ColorSwatch.js";

class BrushPreferences extends Component {
  render() {
    return (
      <>
        <h1>Brush Preferences</h1>
        <div>
          <label>Brush Color</label>
          <ColorSwatch />
          <span>{this.props.brushColor}</span>
        </div>
        <div>
          <label>Motor Speed</label>
          <span>{this.props.motorSpeed}</span>
          <span>{this.props.autoOff}</span>
        </div>
      </>
    );
  }
}

export default BrushPreferences;
