import { forwardRef } from 'react';

import { Icon, IconProps } from './core';

const ArrowRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon
    ref={ref}
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3' strokeLinecap='round' strokeLinejoin='round' />
  </Icon>
));

ArrowRight.displayName = 'ArrowRight';

export { ArrowRight };
