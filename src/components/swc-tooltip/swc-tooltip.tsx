import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'swc-tooltip',
  styleUrl: 'swc-tooltip.css',
  shadow: true,
})
export class SwcTooltip {

  @Prop() text!: string;
  @Prop() position: 'down' | 'up' | 'right' | 'left' = 'up';

  private get class() {
    switch (this.position) {
      case 'right':
        return 'tooltip-right';
      case 'left':
        return 'tooltip-down';
      case 'up':
        return 'tooltip-up';
      case 'down':
        return 'tooltip-down';
      default:
        return 'tooltip-up';
    }
  }

  render() {
    return (
      <div class={`tooltip ${this.class}`}>
        <div class="tooltip-element">
          <slot />
        </div>
        <div class="tooltip-content">
          <span class="tooltip-text">{this.text}</span>
        </div>
      </div>

    );
  }

}
