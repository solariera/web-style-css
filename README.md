# Style Functions

[![npm](https://img.shields.io/npm/v/@solariera/web-style-css)](https://www.npmjs.com/package/@solariera/web-style-css)
[![npm](https://img.shields.io/npm/dw/@solariera/web-style-css)](https://www.npmjs.com/package/@solariera/web-style-css)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@solariera/web-style-css)](https://bundlephobia.com/result?p=@solariera/web-style-css)

Style functions for React Web

## 1. Usage

### 1-1. Installation

```console
# npm
npm install @solariera/web-style-css
```

```console
# yarn
yarn add @solariera/web-style-css
```

## 2. Functions

### 2-1. Flex Style

| Functions          | Parameters                                                                                                     |
| :----------------- | :------------------------------------------------------------------------------------------------------------- |
| flexBasicStyle     | `flexDirection?: string` `flexWrap?: string` `styleDisplay?: string`                                           |
| flexContainerStyle | `justifyContent?: string` `alignContent?: string` `alignItems?: string`                                        |
| flexItemsStyle     | `flexGrow?: number` `flexShrink?: number` `flexBasis?: string \| number` `alignSelf?: string` `order?: number` |

### 2-2. Image Style

| Functions          | Parameters                                                             |
| :----------------- | :--------------------------------------------------------------------- |
| imagePositionStyle | `x?: number` `y?: number` `unit?: string`                              |
| imageSizeStyle     | `width?: number \| string` `height?: number \| string` `unit?: string` |
| imageViewStyle     | `base64: string` `repeat?: string`                                     |

### 2-3. Misc

| Functions     | Parameters               |
| :------------ | :----------------------- |
| listTypeStyle | `listStyleType?: string` |
| overflowStyle | `overflow?: string`      |

### 2-4. Object

| Functions     | Parameters                                                                                                                                                                                                     |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| bgColorStyle  | `bgColor?: string` `bgColorAlpha?: number`                                                                                                                                                                     |
| blurStyle     | `blur?: number` `unit?: string`                                                                                                                                                                                |
| borderStyle   | `borderWidth?: number` `borderColor?: string` `borderColorAlpha?: number` `borderStyle?: string` `borderLeft?: boolean` `borderRight?: boolean` `borderTop?: boolean` `borderBottom?: boolean` `unit?: string` |
| floatStyle    | `floatDirection?: string`                                                                                                                                                                                      |
| marginStyle   | `marginLeft?: number` `marginRight?: number` `marginTop?: number` `marginBottom?: number` `unit?: string`                                                                                                      |
| opacityStyle  | `opacity?: number`                                                                                                                                                                                             |
| paddingStyle  | `paddingLeft?: number` `paddingRight?: number` `paddingTop?: number` `paddingBottom?: number` `unit?: string`                                                                                                  |
| positionStyle | `position?: string` `left?: number` `right?: number` `top?: number` `bottom?: number` `unit?: string`                                                                                                          |
| roundStyle    | `roundSize?: number \| number[]` `unit?: string`                                                                                                                                                               |
| scaleStyle    | `scale?: number` `scaleY?: number` `origin?: string`                                                                                                                                                           |
| sizeStyle     | `width?: number` `height?: number` `unit?: string`                                                                                                                                                             |

### 2-5. Text

| Functions          | Parameters                                                                |
| :----------------- | :------------------------------------------------------------------------ |
| fontColorStyle     | `fontColor?: string` `fontColorAlpha?: number`                            |
| fontFamilyStyle    | `fontFamily?: string`                                                     |
| fontSizeStyle      | `fontSize?: number` `fontUnit?: string`                                   |
| fontWeightStyle    | `fontWeight?: number` `fontStyle?: string`                                |
| letterSpacingStyle | `letterSpacing?: number` `unit?: string`                                  |
| lineHeightStyle    | `lineHeight?: number` `unit?: string`                                     |
| textAlignStyle     | `textAlign?: string`                                                      |
| textStrokeStyle    | `strokeWidth?: number` `strokeColor?: string` `strokeColorAlpha?: number` |
