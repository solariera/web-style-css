import { css } from '../../css';
import { getFloatStyle } from './getFloatStyle';

type FloatType = {
  floarDirection?: string;
};

export const floatStyle = (props: FloatType) => {
  const { floarDirection } = props;

  if (!floarDirection) return css``;

  const direction: string = getFloatStyle(floarDirection);

  const styleString = css`
    float: ${direction};
  `;

  return styleString;
};
