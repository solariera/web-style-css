import { css } from '../../css';

type LetterSpacingType = {
  letterSpacing?: number;
  unit?: string;
};

export const letterSpacingStyle = (props: LetterSpacingType) => {
  const { letterSpacing, unit = 'px' } = props;

  const styleString = css`
    ${letterSpacing !== undefined ? `letter-spacing: ${letterSpacing + unit};` : ``}
  `;

  return styleString;
};
