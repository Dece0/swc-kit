import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'swc-tooltip',
  styleUrl: 'swc-tooltip.css',
  shadow: true,
})
export class SwcTooltip {

  @Prop({ attribute: 'html' }) isHtml: boolean = false;
  @Prop() content: string = '';
  @Prop() position: 'bottom' | 'top' | 'right' | 'left' = 'top';

  private get class() {
    switch (this.position) {
      case 'right':
        return 'tooltip-right';
      case 'left':
        return 'tooltip-left';
      case 'top':
        return 'tooltip-top';
      case 'bottom':
        return 'tooltip-bottom';
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
