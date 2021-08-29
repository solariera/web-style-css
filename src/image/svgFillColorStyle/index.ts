import { rgba } from '@solariera/rgba-syntax';
import { css } from '../../css';

type ColorType = {
  svgFillColor?: string;
  svgFillColorAlpha?: number;
  [key: string]: unknown;
};

export const svgFillColorStyle = (props: ColorType) => {
  const { svgFillColor, svgFillColorAlpha = 1 } = props;

  if (svgFillColor === undefined) return css``;

  const fillColorRgba: string = rgba(svgFillColor, svgFillColorAlpha);

  const styleString = css`
    fill: ${fillColorRgba};
  `;

  return styleString;
};
