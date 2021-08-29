import { css } from '../../css';

type LineHeightType = {
  lineHeight?: number;
  unit?: string;
};

export const lineHeightStyle = (props: LineHeightType) => {
  const { lineHeight, unit = 'px' } = props;

  const styleString = css`
    ${lineHeight !== undefined ? `line-height: ${lineHeight + unit};` : ``}
  `;

  return styleString;
};
