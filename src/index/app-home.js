import { LitElement, html, css } from 'lit';
import '../components/app-layout';

export class AppHome extends LitElement {
  static get styles() {
    return css`
      .article-info {
        display: flex;
        gap: 2rem;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
    `;
  }

  static get properties() {
    return {
      /**
       * Copy for the read the docs hint.
       */
      header: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      news: { type: Array },
    };
  }

  showItem({ title = '', date = '', id = 0 }) {
    return html`
      <article>
        <h2>${title}</h2>
        <p class="article-info">
          ${date}
          <a href=${'/article/?id=' + id}>read</a>
        </p>
      </article>
    `;
  }

  listTemplate() {
    return html`
      ${this.news.length > 0
        ? this.news.map(this.showItem)
        : 'no items'}
    `;
  }

  render() {
    return html`
      <app-layout>
        <h1>${this.header}</h1>
        ${this.listTemplate()}
      </app-layout>
    `;
  }
}

window.customElements.define('app-home', AppHome);
