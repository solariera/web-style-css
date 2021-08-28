import { rgba } from '@solariera/rgba-syntax';
import { css } from '../../css';

type ColorType = {
  activeColor?: string;
  activeColorAlpha?: number;
};

export const activeFillColorStyle = (props: ColorType) => {
  const { activeColor, activeColorAlpha = 1 } = props;

  if (activeColor === undefined) return css``;

  const fillColorRgba: string = rgba(activeColor, activeColorAlpha);

  const styleString = css`
    fill: ${fillColorRgba};
  `;

  return styleString;
};
