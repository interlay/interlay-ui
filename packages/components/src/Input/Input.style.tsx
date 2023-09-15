import styled from 'styled-components';
import { theme } from '@interlay/theme';
import { Placement, Sizes, Spacing } from '@interlay/theme';

const getSpacing = (padding?: Spacing) => (padding ? theme.spacing[padding] : undefined);

type BaseInputProps = {
  $size: Sizes;
  $adornments: { bottom: boolean; left: boolean; right: boolean };
  $padding?: { top: Spacing; bottom: Spacing; left: Spacing; right: Spacing };
  $isDisabled: boolean;
  $hasError: boolean;
  $endAdornmentWidth: number;
};

type AdornmentProps = {
  $position: Placement;
};

const StyledBaseInput = styled.input<BaseInputProps>`
  display: block;
  width: 100%;
  height: 100%;

  outline: none;
  font: inherit;
  letter-spacing: inherit;
  background: none;

  color: ${(props) => (props.disabled ? theme.input.disabled.color : theme.input.color)};
  font-size: ${({ $size, $adornments }) =>
    $adornments.bottom ? theme.input.overflow.large.text : theme.input[$size].text};
  line-height: ${theme.lineHeight.base};
  font-weight: ${({ $size }) => theme.input[$size].weight};

  background-color: ${({ $isDisabled }) => ($isDisabled ? theme.input.disabled.bg : theme.input.background)};
  overflow: hidden;

  border: ${(props) =>
    props.$isDisabled
      ? theme.input.disabled.border
      : props.$hasError
      ? theme.input.error.border
      : theme.border.default};
  border-radius: ${theme.rounded.lg};
  transition:
    border-color ${theme.transition.duration.duration150}ms ease-in-out,
    box-shadow ${theme.transition.duration.duration150}ms ease-in-out;

  padding-top: ${({ $padding }) => getSpacing($padding?.top) || theme.spacing.spacing2};
  padding-left: ${({ $adornments, $padding }) =>
    getSpacing($padding?.left) || ($adornments.left ? theme.input.paddingX.md : theme.spacing.spacing2)};

  padding-right: ${({ $adornments, $endAdornmentWidth, $padding }) => {
    if (!$adornments.right) return getSpacing($padding?.right) || theme.spacing.spacing2;

    // MEMO: adding `spacing6` is a hacky solution because
    // the `endAdornmentWidth` does not update width correctly
    // after fonts are loaded. Instead of falling back to a more
    // complex solution, an extra offset does the job of not allowing
    // the input overlap the adornment.
    return `calc(${$endAdornmentWidth}px + ${theme.spacing.spacing6})`;
  }};
  padding-bottom: ${({ $adornments, $padding }) =>
    getSpacing($padding?.bottom) || ($adornments.bottom ? theme.spacing.spacing6 : theme.spacing.spacing2)};

  &:hover:not(:disabled):not(:focus) {
    border: ${(props) => !props.$isDisabled && !props.$hasError && theme.border.focus};
  }

  &:focus {
    border: ${(props) => !props.$isDisabled && theme.border.focus};
    box-shadow: ${(props) => !props.$isDisabled && theme.boxShadow.focus};
  }

  &::placeholder {
    color: ${(props) => (props.disabled ? theme.input.disabled.color : theme.colors.textTertiary)};
  }

  /* MEMO: inspired by https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp */
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

const BaseInputWrapper = styled.div`
  position: relative;
  color: ${theme.colors.textPrimary};
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

// TODO: simplify this (put into theme)
const Adornment = styled.div<AdornmentProps>`
  display: inline-flex;
  align-items: center;
  position: absolute;
  top: ${({ $position }) => ($position === 'left' || $position === 'right') && '50%'};
  left: ${({ $position }) => ($position === 'left' || $position === 'bottom') && theme.spacing.spacing2};
  right: ${({ $position }) => $position === 'right' && theme.spacing.spacing2};
  transform: ${({ $position }) => ($position === 'left' || $position === 'right') && 'translateY(-50%)'};
  bottom: ${({ $position }) => $position === 'bottom' && theme.spacing.spacing1};
  // to not allow adornment to take more than 50% of the input. We might want to reduce this in the future.
  max-width: 50%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export { Adornment, BaseInputWrapper, StyledBaseInput, Wrapper };
