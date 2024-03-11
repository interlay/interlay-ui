import { render, testA11y } from '@interlay/test-utils';
import { createRef } from 'react';

import { Divider } from '..';

describe('Divider', () => {
  it('should render correctly', () => {
    const wrapper = render(<Divider />);

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = createRef<HTMLHRElement>();

    render(<Divider ref={ref} />);

    expect(ref.current).not.toBeNull();
  });

  it('should pass a11y', async () => {
    await testA11y(<Divider />);
  });
});
