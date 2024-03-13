import { ResponsiveProp, Spacing } from '@interlay/theme';
import { DefaultTheme, css } from 'styled-components';

const getSpacingResponsiveCSS = (theme: DefaultTheme, attribute: string, prop?: ResponsiveProp<Spacing>) =>
  typeof prop === 'object'
    ? css`
        ${prop.xs && theme.breakpoints.media.xs`${attribute}: ${theme.spacing(prop.xs)};`}
        ${prop.s && theme.breakpoints.media.s`${attribute}: ${theme.spacing(prop.s)};`}
    ${prop.md && theme.breakpoints.media.md`${attribute}: ${theme.spacing(prop.md)};`}
    ${prop.lg && theme.breakpoints.media.lg`${attribute}: ${theme.spacing(prop.lg)};`}
    ${prop.xl && theme.breakpoints.media.xl`${attribute}: ${theme.spacing(prop.xl)};`}
      `
    : prop && `${attribute}:${theme.spacing(prop)};`;

const getResponsiveCSS = (
  theme: DefaultTheme,
  attribute: string,
  prop?: ResponsiveProp<string | number | boolean>,
  condition?: (prop: string | number | boolean) => string | number
) =>
  typeof prop === 'object'
    ? css`
        ${prop.xs && theme.breakpoints.media.xs`${attribute}: ${condition ? condition(prop.xs) : prop.xs};`}
        ${prop.s && theme.breakpoints.media.s`${attribute}: ${condition ? condition(prop.s) : prop.s};`}
    ${prop.md && theme.breakpoints.media.md`${attribute}: ${condition ? condition(prop.md) : prop.md};`}
    ${prop.lg && theme.breakpoints.media.lg`${attribute}: ${condition ? condition(prop.lg) : prop.lg};`}
    ${prop.xl && theme.breakpoints.media.xl`${attribute}: ${condition ? condition(prop.xl) : prop.xl};`}
      `
    : prop && `${attribute}:${prop};`;

export { getResponsiveCSS, getSpacingResponsiveCSS };
