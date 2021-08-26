import { Component, h, Listen, Element, Prop } from '@stencil/core';
import { ToggleEvent } from '../swc-accordion-item/swc-accordion-item';

@Component({
  tag: 'swc-accordion',
  styleUrl: 'swc-accordion.css',
  shadow: true,
})
export class SwcAccordion {

  @Prop({ attribute: 'always-open' }) alwaysOpen: boolean = false;

  @Element() hostElement: HTMLElement;

  @Listen('toggle')
  async handleToggle(ev: CustomEvent<ToggleEvent>): Promise<void> {
    const { element, shouldOpen } = ev.detail;
    if (!this.alwaysOpen) {
      await this.closeOtherItems(element);
    }
    if (!shouldOpen) {
      await element.show();
      return;
    }
    await element.hide();
  }

  private closeOtherItems(el: HTMLSwcAccordionItemElement): Promise<void[]> {
    const itemsToClose = Array
      .from(this.hostElement.children)
      .filter(item => !item.isSameNode(el))
      .map((item: HTMLSwcAccordionItemElement) => item.hide());

    return Promise.all(itemsToClose);
  }

  render() {
    return (
      <div class="accordion-list">
        <slot />
      </div>
    );
  }

}
