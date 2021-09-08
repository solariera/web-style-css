import { rgba } from '@solariera/rgba-syntax';
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
  msScrollBarType?: string;
};

type MsScrollBarType = 'auto' | 'non' | 'scrollbar' | '-ms-autohiding-scrollbar';
type ScrollBarWidthType = 'auto' | 'none' | 'thin';

export const scrollBarStyle = (props: ScrollBarType) => {
  const {
    scrollBarWidth,
    scrollBarHeight,
    scrollBarColor,
    scrollBarColorAlpha,
    scrollBarThumbColor,
    scrollBarThumbColorAlpha,
    scrollBarUnit = 'px',
    msScrollBarType,
  } = props;

  const scrollBarRgba = scrollBarColor ? rgba(scrollBarColor, scrollBarColorAlpha) : undefined;
  const scrollBarThumbRgba = scrollBarThumbColor ? rgba(scrollBarThumbColor, scrollBarThumbColorAlpha) : undefined;

  const styleString = css`
    scrollbar-width: none;
    ${msScrollBarType ? `-ms-overflow-style: ` + msScrollBarType + `;` : ``}

    &::-webkit-scrollbar {
      ${scrollBarWidth ? `height: ` + scrollBarWidth + scrollBarUnit + `;` : ``}
      ${scrollBarHeight ? `height: ` + scrollBarHeight + scrollBarUnit + `;` : ``}
      ${scrollBarRgba ? `background-color: ` + scrollBarRgba + `;` : ``}
    }

    &::-webkit-scrollbar-thumb {
      ${scrollBarThumbRgba ? `background-color: ` + scrollBarThumbRgba + `;` : ``}
    }
  `;

  return styleString;
};
