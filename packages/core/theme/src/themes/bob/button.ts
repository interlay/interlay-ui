import { fontSize, fontWeight, lineHeight, rounded, spacing, transition } from '../../core';
import { ButtonTheme } from '../../components';
import { hexToRgba, rem } from '../../utils';

import { color } from './colors';

const button: ButtonTheme = {
  base: {
    borderRadius: rounded('md'),
    fontWeight: fontWeight('semibold'),
    ...transition('common', 'normal')
  },
  size: {
    s: {
      height: rem(36),
      fontSize: fontSize('s'),
      lineHeight: lineHeight('s'),
      padding: `0 ${spacing('md')}`
    },
    md: {
      height: spacing('5xl'),
      fontSize: fontSize('s'),
      lineHeight: lineHeight('s'),
      padding: `0 ${spacing('lg')}`
    },
    lg: {
      height: rem(44),
      fontSize: fontSize('md'),
      lineHeight: lineHeight('md'),
      padding: `0 ${spacing('xl')}`
    },
    xl: {
      height: spacing('6xl'),
      fontSize: fontSize('md'),
      lineHeight: lineHeight('md'),
      padding: `0 ${spacing('2xl')}`
    },
    '2xl': {
      height: rem(60),
      fontSize: fontSize('lg'),
      lineHeight: lineHeight('lg'),
      padding: `0 ${spacing('3xl')}`
    }
  },
  variant: {
    solid: {
      color: {
        default: {
          base: {
            backgroundColor: color('grey-500'),
            color: color('light')
          },
          hover: {
            backgroundColor: color('grey-400')
          },
          active: {
            backgroundColor: color('grey-300')
          },
          focus: {
            boxShadow: '0px 0px 0px 4px #4040403D, 0px 1px 2px 0px #1018280D'
          },
          disabled: {
            opacity: 0.5
          }
        },
        primary: {
          base: {
            backgroundColor: color('primary-500'),
            color: color('light')
          },
          hover: {
            backgroundColor: color('primary-600')
          },
          active: {
            backgroundColor: color('primary-700')
          },
          focus: {
            boxShadow: '0px 0px 0px 4px #FA45163D, 0px 1px 2px 0px #1018280D'
          },
          disabled: {
            opacity: 0.5
          }
        }
      }
    },
    outline: {
      color: {
        default: {
          base: {
            border: `1px solid ${color('grey-400')}`,
            color: color('light')
          },
          hover: {
            backgroundColor: color('grey-600')
          },
          active: {
            backgroundColor: color('grey-300')
          },
          focus: {
            boxShadow: '0px 0px 0px 4px #98A2B324, 0px 1px 2px 0px #1018280D'
          },
          disabled: {
            opacity: 0.5
          }
        },
        primary: {
          base: {
            border: `1px solid ${color('primary-300')}`,
            color: color('primary-300')
          },
          hover: {
            backgroundColor: color('grey-300')
          },
          active: {
            backgroundColor: color('grey-300')
          },
          focus: {
            boxShadow: '0px 0px 0px 4px #D92D2040, 0px 1px 2px 0px #1018280D'
          },
          disabled: {
            opacity: 0.5
          }
        }
      }
    },
    ghost: {
      color: {
        default: {
          base: {
            color: color('light')
          },
          hover: {
            backgroundColor: hexToRgba(color('grey-300'), 20)
          },
          active: {
            backgroundColor: hexToRgba(color('grey-300'), 30)
          },
          focusVisible: {
            boxShadow: '0px 0px 0px 4px #98A2B324, 0px 1px 2px 0px #1018280D'
          },
          disabled: {
            opacity: 0.5
          }
        },
        primary: {
          base: {
            color: color('primary-500')
          },
          hover: {
            backgroundColor: hexToRgba(color('primary-500'), 20)
          },
          active: {
            backgroundColor: hexToRgba(color('primary-500'), 30)
          },
          focusVisible: {
            boxShadow: '0px 0px 0px 4px #D92D2040, 0px 1px 2px 0px #1018280D'
          },
          disabled: {
            opacity: 0.5
          }
        }
      }
    }
  }
};

export { button };
