import { rgba } from '@solariera/rgba-syntax';
import { css } from '../../css';

type StrokeType = {
  strokeWidth?: number;
  strokeColor?: string;
  strokeColorAlpha?: number;
  unit?: string;
};

export const textStrokeStyle = (props: StrokeType) => {
  const { strokeWidth, strokeColor, strokeColorAlpha, unit = 'px' } = props;

  /**
   * ストロークカラーのrgba形式
   */
  const textStrokeColor: string | undefined = strokeColor && rgba(strokeColor, strokeColorAlpha);

  const styleString = css`
    ${strokeWidth !== undefined ? `text-stroke-width: ${strokeWidth + unit};` : ``}
    ${textStrokeColor !== undefined ? `text-stroke-color: ${textStrokeColor};` : ``}
  `;

  return styleString;
};
