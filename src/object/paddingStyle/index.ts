import { css } from '../../css';

type PaddingType = {
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  unit?: string;
};

export const paddingStyle = (props: PaddingType) => {
  const { paddingLeft, paddingRight, paddingTop, paddingBottom, unit = 'px' } = props;

  // 全てundefinedであれば「margin: 0」を返す
  if ([paddingLeft, paddingRight, paddingTop, paddingBottom].every((enable) => enable === undefined)) {
    const styleString = css`
      padding: 0;
    `;

    return styleString;
  }

  const styleString = css`
    ${paddingLeft !== undefined && `padding-left: ${paddingLeft + unit};`}
    ${paddingRight !== undefined && `padding-right: ${paddingRight + unit};`}
    ${paddingTop !== undefined && `padding-top: ${paddingTop + unit};`}
    ${paddingBottom !== undefined && `padding-bottom: ${paddingBottom + unit};`}
  `;

  return styleString;
};
