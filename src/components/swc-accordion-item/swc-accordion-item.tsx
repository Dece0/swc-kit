import { Component, Element, Event, EventEmitter, h, Listen, Method, Prop, State } from '@stencil/core';

@Component({
  tag: 'swc-accordion-item',
  styleUrl: 'swc-accordion-item.css',
  shadow: true,
})
export class SWCAccordionItem {
  @State() isOpen: boolean = false;

  @Prop() index!: number;
  @Prop() label!: string;

  @Event() toggle: EventEmitter;

  @Element() hostElement: HTMLElement;

  private content: HTMLDivElement;

  componentDidLoad(): void {
    this.content = this.hostElement.shadowRoot.querySelector('.accordion-body');
  }

  @Listen('click')
  toggleOpen(): void {
    this.toggle.emit({
      element: this.hostElement,
      shouldOpen: this.isOpen,
    });
  }

  @Method()
  async open(): Promise<void> {
    this.isOpen = true;
    this.content.style.maxHeight = `${this.content.scrollHeight}px`;
  }

  @Method()
  async close(): Promise<void> {
    this.isOpen = false;
    this.content.style.maxHeight = '';
  }

  render() {
    return (
      <div class={`accordion-item ${this.isOpen ? 'accordion-open': ''}`}>
        <h2 class="accordion-header">
          {this.label}
          <button class="accordion-btn">
            <svg
              class="accordion-icon"
              viewBox="0 0 19.412 10.959"
            >
              <path
                d="m19.101 1.7855-8.8586 8.8658c-0.20392 0.20392-0.4766 0.30825-0.74454 0.30825-0.26794 0-0.53588-0.10434-0.7398-0.30825l-8.4461-8.4413c-0.41495-0.40784-0.41495-1.0741-0.004743-1.4843 0.41495-0.41021 1.0765-0.41021 1.4843 0l7.7063 7.6991 8.1236-8.1188c0.41021-0.40784 1.0694-0.40784 1.4796 0 0.41495 0.41021 0.41495 1.0694 0 1.4796"
              />
            </svg>
          </button>
        </h2>
        <div class="accordion-body">
          <slot />
        </div>
      </div>
    );
  }

}
