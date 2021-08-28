import { css } from '../../css';

type BlurType = {
  blur?: number;
  unit?: string;
  [key: string]: unknown;
};

export const blurStyle = (props: BlurType) => {
  const { blur, unit = 'px' } = props;

  if (blur === undefined) return css``;

  const styleString = css`
    backdrop-filter: blur(${blur + unit});
  `;

  return styleString;
};
