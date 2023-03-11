import { LitElement, html } from 'lit';
import '../components/app-layout';

export class AppArticle extends LitElement {
  static get properties() {
    return {
      item: { type: Object },
    };
  }

  contentTemplate() {
    return html`
      ${this.item?.content?.length > 0
        ? this.item?.content.map((val) => html`<p>${val}</p>`)
        : 'no items'}
    `;
  }

  render() {
    return html`
      <app-layout>
        <h1>${this.item?.title}</h1>
        <p>${this.item?.date}</p></p>
        ${this.contentTemplate()}
      </app-layout>
    `;
  }
}

window.customElements.define('app-article', AppArticle);
