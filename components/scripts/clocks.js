class ClockShort extends ModelOfView {
  constructor() {
    super();
    this.view = getShortTime;
    this.period = 60000;
  }
}

customElements.define('clock-short', ClockShort);

////////////////////////////////////////////////////////////////////////////////////////////////////////

class ClockFull extends ModelOfView {
  constructor() {
    super();
    this.view = getFullTime;
  }
}

customElements.define('clock-full', ClockFull);