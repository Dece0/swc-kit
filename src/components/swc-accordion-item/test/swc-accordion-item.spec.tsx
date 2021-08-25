import { newSpecPage } from '@stencil/core/testing';
import { SwcAccordionItem } from '../swc-accordion-item';

describe('swc-accordion-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcAccordionItem],
      html: `<swc-accordion-item></swc-accordion-item>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-accordion-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-accordion-item>
    `);
  });
});
