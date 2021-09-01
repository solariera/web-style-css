import { css } from '../../css';

type FontSizeType = {
  fontWeight?: number;
  fontSize?: number;
  fontUnit?: string;
};

export const fontSizeStyle = (props: FontSizeType) => {
  const { fontWeight = 400, fontSize = 0.7, fontUnit = 'rem' } = props;

  const styleString = css`
    font-weight: ${fontWeight};
    font-size: ${fontSize + fontUnit};
  `;

  return styleString;
};
