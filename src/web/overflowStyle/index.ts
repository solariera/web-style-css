import { css } from '../../css';
import { getOverflowStyle } from './getOverflowStyle';

type OverflowType = {
  overflowType?: string;
};

export const overflowStyle = (props: OverflowType) => {
  const { overflowType } = props;

  if (!overflowType) return css``;

  const type: string = getOverflowStyle(overflowType);

  const styleString = css`
    overflow: ${type};
  `;

  return styleString;
};
