"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.overflowStyle = void 0;
const css_1 = require("../../css");
const getOverflowStyle_1 = require("./getOverflowStyle");
const overflowStyle = (props) => {
    const { overflowType } = props;
    if (!overflowType)
        return css_1.css ``;
    const type = getOverflowStyle_1.getOverflowStyle(overflowType);
    const styleString = css_1.css `
    overflow: ${type};
  `;
    return styleString;
};
exports.overflowStyle = overflowStyle;
