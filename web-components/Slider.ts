import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('v-slider')
export class VSlider extends LitElement {
  static styles = css`
    .slide-item {
      text-align: center;
      height: 200px;
      line-height: 200px;
      background: #eee;
      margin: 0 10px;
    }
    img {
      max-width: 100%;
      max-height: 100%;
      vertical-align: middle;
    }
  `;

  render() {
    return html`
      <div class="slide-item">
        <img src="https://via.placeholder.com/300/007bff/fff?Text=Image+1" />
      </div>
      <div class="slide-item">
        <img src="https://via.placeholder.com/300/28a745/fff?Text=Image+2" />
      </div>
      <div class="slide-item">
        <img src="https://via.placeholder.com/300/dc3545/fff?Text=Image+3" />
      </div>
    `;
  }
}
