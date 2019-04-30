
class CalendarEurope extends ModelOfView {
  constructor() {
    super();
    this.view = getEuFormat;
    this.period = false;
  }
}

customElements.define('calendar-europe', CalendarEurope);

////////////////////////////////////////////////////////////////////////////////////////////////////////

class CalendarUkraine extends ModelOfView {
  constructor() {
    super();
    this.view = getUaFormat;
    this.period = false;
  }
}

customElements.define('calendar-ukraine', CalendarUkraine);