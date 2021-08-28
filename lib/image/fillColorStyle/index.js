"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fillColorStyle = void 0;
const rgba_syntax_1 = require("@solariera/rgba-syntax");
const css_1 = require("../../css");
const fillColorStyle = (props) => {
    const { fillColor, fillColorAlpha = 1 } = props;
    if (fillColor === undefined)
        return (0, css_1.css) ``;
    const fillColorRgba = (0, rgba_syntax_1.rgba)(fillColor, fillColorAlpha);
    const styleString = (0, css_1.css) `
    fill: ${fillColorRgba};
  `;
    return styleString;
};
exports.fillColorStyle = fillColorStyle;
