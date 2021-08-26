import { newSpecPage } from '@stencil/core/testing';
import { SwcAccordion } from '../swc-accordion';

describe('swc-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcAccordion],
      html: `<swc-accordion></swc-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-accordion>
    `);
  });
});
