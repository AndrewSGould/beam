import styled from "styled-components";

const beamBrushBlue = "#00c9f0";
const beamBrushPink = "#f31884";
const beamBrushChartreuse = "#daff00";

const ColorSwatch = styled.span`
  border-radius: 50%;
  border: 1px solid black;
  display: inline-block;
  height: 15px;
  width: 15px;

  ${props =>
    props.color == "pink" &&
    `
    background-color: ${beamBrushPink}
  `}

  ${props =>
    props.color == "blue" &&
    `
    background-color: ${beamBrushBlue}
  `}

  ${props =>
    props.color == "chartreuse" &&
    `
    background-color: ${beamBrushChartreuse}
  `}

  ${props => props.color == "default" && `background-color: #000`}
`;

ColorSwatch.defaultProps = {
  color: "default"
};

export default ColorSwatch;
