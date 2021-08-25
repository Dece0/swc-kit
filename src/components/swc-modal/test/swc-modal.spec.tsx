import { newSpecPage } from '@stencil/core/testing';
import { SWCModal } from '../swc-modal';

describe('swc-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SWCModal],
      html: `<swc-modal></swc-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-modal>
    `);
  });
});
