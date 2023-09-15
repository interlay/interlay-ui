import { render } from '@testing-library/react';
import * as React from 'react';

import { Accordion, AccordionItem } from '..';

describe('Accordion', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Accordion>
        <AccordionItem>Accordion Item</AccordionItem>
      </Accordion>
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it('ref should be forwarded', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <Accordion ref={ref}>
        <AccordionItem>Accordion Item</AccordionItem>
      </Accordion>
    );
    expect(ref.current).not.toBeNull();
  });
});
