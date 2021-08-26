import { newE2EPage } from '@stencil/core/testing';

describe('swc-accordion-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-accordion-item></swc-accordion-item>');

    const element = await page.find('swc-accordion-item');
    expect(element).toHaveClass('hydrated');
  });
});
