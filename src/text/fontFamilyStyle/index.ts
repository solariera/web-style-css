import { css } from '../../css';

type FontFamilyType = {
  fontFamily?: string;
  fontStyle?: string;
  [key: string]: unknown;
};

export const fontFamilyStyle = (props: FontFamilyType) => {
  const { fontFamily, fontStyle = 'normal' } = props;

  const styleString = css`
    ${fontFamily !== undefined && `font-family: ${fontFamily};`}
    font-style: ${fontStyle};
  `;

  return styleString;
};
