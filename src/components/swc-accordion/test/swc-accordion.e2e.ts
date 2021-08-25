import { newE2EPage } from '@stencil/core/testing';

describe('swc-accordion', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-accordion></swc-accordion>');

    const element = await page.find('swc-accordion');
    expect(element).toHaveClass('hydrated');
  });
});
