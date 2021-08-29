import { rgba } from '@solariera/rgba-syntax';
import { css } from '../../css';

type ColorType = {
  activeFillColor?: string;
  activeFillColorAlpha?: number;
  [key: string]: unknown;
};

export const activeFillColorStyle = (props: ColorType) => {
  const { activeFillColor, activeFillColorAlpha = 1 } = props;

  if (activeFillColor === undefined) return css``;

  const fillColorRgba: string = rgba(activeFillColor, activeFillColorAlpha);

  const styleString = css`
    fill: ${fillColorRgba};
  `;

  return styleString;
};
