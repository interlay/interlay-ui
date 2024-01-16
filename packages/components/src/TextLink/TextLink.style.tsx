import styled from 'styled-components';
import { ArrowTopRightOnSquare } from '@interlay/icons';
import { theme, resolveColor, resolveHeight } from '@interlay/theme';
import { Colors, FontSize, FontWeight } from '@interlay/theme';

type BaseTextLinkProps = {
  $color?: Colors;
  $isQuiet?: boolean;
  $size?: FontSize;
  $weight?: FontWeight;
};

const BaseTextLink = styled.a<BaseTextLinkProps>`
  display: inline-flex;
  align-items: center;
  color: ${({ $color }) => resolveColor($color)};
  font-size: ${({ $size }) => $size && theme.text[$size]};
  line-height: ${({ $size }) => resolveHeight($size)};
  font-weight: ${({ $weight }) => $weight && theme.fontWeight[$weight]};
  text-decoration: ${(props) => (props.$isQuiet ? 'none' : 'underline')};

  &:hover,
  &:focus-visible {
    text-decoration: underline;
  }
`;

const StyledIcon = styled(ArrowTopRightOnSquare)`
  margin-left: ${theme.spacing.spacing2};
  width: 1em;
  height: 1em;
  color: inherit;
`;

export { BaseTextLink, StyledIcon };
