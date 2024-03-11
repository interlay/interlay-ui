import type { AlignItems, AlignSelf, Direction, JustifyContent, Spacing, Wrap } from '@interlay/theme';

import { styled } from 'styled-components';
import { StyledMarginProps } from '@interlay/hooks';

import { marginCSS } from '../utils/margin';

type StyledFlexProps = {
  $gap?: Spacing;
  $justifyContent?: JustifyContent;
  $alignItems?: AlignItems;
  $direction?: Direction;
  $flex?: string | number;
  $wrap?: Wrap;
  $alignSelf?: AlignSelf;
} & StyledMarginProps;

const StyledFlex = styled.div<StyledFlexProps>`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  gap: ${({ theme, $gap }) => $gap && theme.spacing($gap)};
  flex: ${(props) => props.$flex};
  flex-wrap: ${(props) => (typeof props.$wrap === 'boolean' ? 'wrap' : props.$wrap)};
  align-self: ${(props) => props.$alignSelf};
  ${(props) => marginCSS(props)};
`;

export { StyledFlex };
