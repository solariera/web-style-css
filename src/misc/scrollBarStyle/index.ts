import { css } from '../../css';
import { getListStyleType } from './getListStyleType';

type ScrollBarType = {
  scrollBarWidth?: number;
  scrollBarHeight?: number;
  scrollBarColor?: string;
  scrollBarColorAlpha?: number;
  scrollBarThumbColor?: string;
  scrollBarThumbColorAlpha?: number;
  scrollBarUnit?: number;
};

export const scrollBarStyle = (props: ScrollBarType) => {
  const styleString = css`
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      width: 4px;
      height: 64px;
      background-color: #cccccc;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
    }
  `;

  return styleString;
};
