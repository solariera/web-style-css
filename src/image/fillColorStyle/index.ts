import { rgba } from '@solariera/rgba-syntax';
import { css } from '../../css';

type ColorType = {
  fillColor?: string;
  fillColorAlpha?: number;
  [key: string]: unknown;
};

export const fillColorStyle = (props: ColorType) => {
  const { fillColor, fillColorAlpha = 1 } = props;

  if (fillColor === undefined) return css``;

  const fillColorRgba: string = rgba(fillColor, fillColorAlpha);

  const styleString = css`
    fill: ${fillColorRgba};
  `;

  return styleString;
};
