import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }

  async getHtml() {
    return `
      <h1>Welcome back, Dom</h1>
      <p>
        하하하하 안녕 돔.
      </p>
      <p>
        <a href="/posts" data-link>View recents posts.</a>
      </p>
    `;
  }
}