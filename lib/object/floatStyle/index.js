"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.floatStyle = void 0;
const css_1 = require("../../css");
const getFloatStyle_1 = require("./getFloatStyle");
const floatStyle = (props) => {
    const { floarDirection } = props;
    if (!floarDirection)
        return css_1.css ``;
    const direction = getFloatStyle_1.getFloatStyle(floarDirection);
    const styleString = css_1.css `
    float: ${direction};
  `;
    return styleString;
};
exports.floatStyle = floatStyle;
