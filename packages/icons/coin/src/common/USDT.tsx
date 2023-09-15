import { forwardRef } from 'react';
import { Icon, IconProps } from '@interlay/icons';

const USDT = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <Icon {...props} ref={ref} fill='none' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'>
    <title>USDT</title>
    <circle cx='32' cy='32' fill='#50AF95' r='32' />
    <path
      clipRule='evenodd'
      d='M36.0629 33.1812C35.8444 33.1976 34.7153 33.265 32.1967 33.265C30.1935 33.265 28.7712 33.2049 28.2722 33.1812C20.5307 32.8404 14.7523 31.4916 14.7523 29.8768C14.7523 28.2619 20.5307 26.915 28.2722 26.5687V31.8379C28.7785 31.8744 30.2281 31.96 32.2313 31.96C34.6352 31.96 35.8389 31.8598 36.0557 31.8397V26.5724C43.7808 26.9169 49.5465 28.2656 49.5465 29.8768C49.5465 31.488 43.7826 32.8367 36.0557 33.1794L36.0629 33.1812ZM36.0629 26.0274V21.3123H46.8439V14.1221H17.4912V21.3123H28.2704V26.0256C19.509 26.4284 12.9202 28.1653 12.9202 30.2468C12.9202 32.3282 19.509 34.0633 28.2704 34.468V49.5775H36.0611V34.4625C44.8025 34.0597 51.3803 32.3246 51.3803 30.245C51.3803 28.1653 44.8079 26.4302 36.0611 26.0256L36.0629 26.0274Z'
      fill='white'
      fillRule='evenodd'
    />
  </Icon>
));

USDT.displayName = 'USDT';

export { USDT };
