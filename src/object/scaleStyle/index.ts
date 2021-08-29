import { css } from '../../css';

type ScaleType = {
  scaleX?: number;
  scaleY?: number;
  scaleOrigin?: string;
};

export const scaleStyle = (props: ScaleType) => {
  const { scaleX, scaleY, scaleOrigin = 'center' } = props;

  if (scaleX === undefined) return css``;

  const styleString = css`
    transform: scale(${scaleX}, ${scaleY || scaleX}); /* Equal to scaleX(2) scaleY(0.5) */
    transform-origin: ${scaleOrigin};
  `;

  return styleString;
};
