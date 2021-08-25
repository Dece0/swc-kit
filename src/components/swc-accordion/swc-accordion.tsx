import { Component, h, Listen, Element, Prop } from '@stencil/core';

@Component({
  tag: 'swc-accordion',
  styleUrl: 'swc-accordion.css',
  shadow: true,
})
export class SWCAccordion {

  @Prop({ attribute: 'is-collapsible' }) isCollapsible: boolean = false;

  @Element() hostElement: HTMLElement;

  @Listen('toggle')
  async handleToggle(ev): Promise<void> {
    const element = ev.detail.element as HTMLElement;
    if (!this.isCollapsible) {
      await this.closeOtherItems(element);
    }
    if (!ev.detail.shouldOpen) {
      await ev.detail.element.open();
      return;
    }
    await ev.detail.element.close();
  }

  private closeOtherItems(el: HTMLElement): Promise<any[]> {
    const items = Array.from(this.hostElement.children);
    const itemsToClose = items
      .filter(item => !item.isSameNode(el))
      .map((item: any) => item.close());

    return Promise.all(itemsToClose);
  }

  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }

}
