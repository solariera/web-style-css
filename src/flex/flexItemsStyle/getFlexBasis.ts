type FlexBasisType = 'auto' | number;

export const getFlexBasis = (basis?: string | number): FlexBasisType | undefined => {
  if (basis === 'auto') return 'auto' as const;
  if (typeof basis === 'number') return basis;

  return undefined;
};
