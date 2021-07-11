type AlignContentType = 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';

export const getAlignContent = (align?: string): AlignContentType | undefined => {
  switch (align) {
    case 'flex-start':
      return 'flex-start' as const;

    case 'flex-end':
      return 'flex-end' as const;

    case 'center':
      return 'center' as const;

    case 'space-between':
      return 'space-between' as const;

    case 'space-around':
      return 'space-around' as const;

    case 'stretch':
      return 'stretch' as const;

    default:
      return undefined;
  }
};
