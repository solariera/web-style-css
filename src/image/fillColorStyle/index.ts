import { rgba } from '@solariera/rgba-syntax';
import { css } from '../../css';

type ColorType = {
  fillColorSvg?: string;
  fillColorAlpha?: number;
  [key: string]: unknown;
};

export const fillColorStyle = (props: ColorType) => {
  const { fillColorSvg, fillColorAlpha = 1 } = props;

  if (fillColorSvg === undefined) return css``;

  const fillColorRgba: string = rgba(fillColorSvg, fillColorAlpha);

  const styleString = css`
    fill: ${fillColorRgba};
  `;

  return styleString;
};
