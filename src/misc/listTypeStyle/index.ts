import { css } from '../../css';
import { getListStyleType } from './getListStyleType';

type FlexItemsType = {
  listStyleType?: string;
};

export const listTypeStyle = (props: FlexItemsType) => {
  const { listStyleType = 'none' } = props;

  /**
   * list-style-typeの値を取得する
   */
  const type = getListStyleType(listStyleType);

  const styleString = css`
    ${type !== undefined ? `list-style-type: ${type};` : ``}
  `;

  return styleString;
};
