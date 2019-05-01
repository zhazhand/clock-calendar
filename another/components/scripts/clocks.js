class ClockFull extends HTMLElement {
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

////////////////////////////////////////////////////////////////////////////////////////////////////////

class ClockShort extends ClockFull {
  constructor() {
    super();
    this.view = getShortTime;
    this.period = 30000;
  }
}

customElements.define('clock-full', ClockFull);
customElements.define('clock-short', ClockShort);