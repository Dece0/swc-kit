import { Component, Prop, h, Element, Listen, Method, State } from '@stencil/core';

@Component({
  tag: 'swc-modal',
  styleUrl: 'swc-modal.css',
  shadow: true,
})
export class SWCModal {
  /**
   * The modal size
   */
  @Prop()
  size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * The modal static backdrop
   */
  @Prop({
    attribute: 'static-backdrop',
    reflect: false,
    mutable: false
  })
  staticBackdrop: boolean = false;


  /**
   * The modal visibility state
   */
  @State()
  visible: boolean = false;

  /**
   * The component
   */
  @Element() el: HTMLElement;

  /**
   * Event listener
   */
  @Listen('click', { capture: true })
  handleClick(ev: Event) {
    if (this.staticBackdrop) {
      return;
    }
    if (!this.el.isSameNode(ev.target as Node)) {
      return;
    }
    this.visible = false;
  }

  private get class() {
    switch (this.size) {
      case 'sm':
        return 'modal-sm';
      case 'md':
        return 'modal-md';
      case 'lg':
        return 'modal-lg';
      default:
        return 'modal-md';
    }
  }

  @Method()
  async show() {
    this.visible = true;
  }

  @Method()
  async hide() {
    this.visible = false;
  }

  @Method()
  async toggle() {
    this.visible = !this.visible;
  }

  render() {
    return (
      <div class={`modal ${this.class} ${this.visible ? 'modal-active' : ''}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <slot />
          </div>
        </div>
      </div>
    );
  }
}
