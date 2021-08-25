import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'swc-tooltip',
  styleUrl: 'swc-tooltip.css',
  shadow: true,
})
export class SwcTooltip {

  @Prop({ attribute: 'html' }) isHtml: boolean = false;
  @Prop() content: string = '';
  @Prop() position: 'down' | 'up' | 'right' | 'left' = 'up';

  private get class() {
    switch (this.position) {
      case 'right':
        return 'tooltip-right';
      case 'left':
        return 'tooltip-left';
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
          {
            this.isHtml ? (
              <div class="tooltip-text" innerHTML={this.content} />
            ) : (
              <div class="tooltip-text">
                {this.content}
              </div>
            )
          }
        </div>
      </div>

    );
  }

}
