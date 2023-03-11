import { LitElement, html } from 'lit';
import { layoutStyles } from './layout-styles';

export class AppLayout extends LitElement {
  static styles = layoutStyles;

  _headerTemplate() {
    return html` <header>
      <h3>MPA Blog ${'<='} Vite + Lit</h3>
      <nav>
        <a href="/">HOME</a>
        <a href="/about/">ABOUT</a>
      </nav>
    </header>`;
  }

  _footerTemplate() {
    return html` <footer>
      <p>&copy;2023 AMPM</p>
      <p>Powered by: Lit || Developed with: Vite</p>
    </footer>`;
  }

  render() {
    return html`
      ${this._headerTemplate()}
      <main>
        <slot></slot>
      </main>
      ${this._footerTemplate()}
    `;
  }
}

window.customElements.define('app-layout', AppLayout);
