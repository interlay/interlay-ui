import { forwardRef } from 'react';

import { Icon, IconProps } from './core';

const PlusCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon
    {...props}
    ref={ref}
    fill='none'
    stroke='currentColor'
    strokeWidth='1.5'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' strokeLinecap='round' strokeLinejoin='round' />
  </Icon>
));

PlusCircle.displayName = 'PlusCircle';

export { PlusCircle };
