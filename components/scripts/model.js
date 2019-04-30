class ModelOfView extends HTMLElement {
  constructor() {
    super();
    this.view = getFullTime;
    this.period = 1000;
  }
  connectedCallback() {
    this.render();
    if (this.period) {
      this.interval = setInterval(() => this.render(), this.period);
    }
  }

  disconnectedCallback() {
    if (this.period) {
      clearInterval(this.interval);
    }
  }

  render() {
    this.textContent = `${this.view()}`;
  }
}

