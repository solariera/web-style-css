import { css } from '../../css';

type MarginType = {
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  unit?: string;
};

export const marginStyle = (props: MarginType) => {
  const { marginLeft, marginRight, marginTop, marginBottom, unit = 'px' } = props;

  // 全てundefinedであれば「margin: 0」を返す
  if ([marginLeft, marginRight, marginTop, marginBottom].every((enable) => enable === undefined)) {
    const styleString = css`
      margin: 0;
    `;

    return styleString;
  }

  const styleString = css`
    ${marginLeft !== undefined && `margin-left: ${marginLeft + unit};`}
    ${marginRight !== undefined && `margin-right: ${marginRight + unit};`}
    ${marginTop !== undefined && `margin-top: ${marginTop + unit};`}
    ${marginBottom !== undefined && `margin-bottom: ${marginBottom + unit};`}
  `;

  return styleString;
};
