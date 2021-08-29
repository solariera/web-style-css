import { rgba } from '@solariera/rgba-syntax';
import { css } from '../../css';

type ColorType = {
  svgActiveColor?: string;
  svgActiveColorAlpha?: number;
  [key: string]: unknown;
};

export const svgActiveColorStyle = (props: ColorType) => {
  const { svgActiveColor, svgActiveColorAlpha = 1 } = props;

  if (svgActiveColor === undefined) return css``;

  const fillColorRgba: string = rgba(svgActiveColor, svgActiveColorAlpha);

  const styleString = css`
    fill: ${fillColorRgba};
  `;

  return styleString;
};
