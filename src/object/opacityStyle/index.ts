import { css } from '../../css';

type OpacityType = {
  opacity?: number;
  [key: string]: unknown;
};

export const opacityStyle = (props: OpacityType) => {
  const { opacity } = props;

  if (opacity === undefined) return css``;

  const styleString = css`
    opacity: ${opacity};
  `;

  return styleString;
};
