import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

@customElement('v-slider')
export class VSlider extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    .swiper {
      width: 100%;
      height: 200px;
    }
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      background: #eee;
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }
  `;

  firstUpdated() {
    const swiperEl = this.renderRoot.querySelector('.swiper') as HTMLElement | null;
    const paginationEl = this.renderRoot.querySelector('.swiper-pagination') as HTMLElement | null;
    const nextEl = this.renderRoot.querySelector('.swiper-button-next') as HTMLElement | null;
    const prevEl = this.renderRoot.querySelector('.swiper-button-prev') as HTMLElement | null;

    if (swiperEl && paginationEl && nextEl && prevEl) {
      new Swiper(swiperEl, {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: paginationEl,
          clickable: true,
        },
        navigation: {
          nextEl,
          prevEl,
        },
      });
    }
  }

  render() {
    return html`
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="https://via.placeholder.com/300/007bff/fff?Text=Image+1" />
          </div>
          <div class="swiper-slide">
            <img src="https://via.placeholder.com/300/28a745/fff?Text=Image+2" />
          </div>
          <div class="swiper-slide">
            <img src="https://via.placeholder.com/300/dc3545/fff?Text=Image+3" />
          </div>
        </div>

        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    `;
  }
}
