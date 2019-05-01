
class CalendarEurope extends ClockFull {
  constructor() {
    super();
    this.view = getEuFormat;
    this.period = false;
  }
}

customElements.define('calendar-europe', CalendarEurope);

////////////////////////////////////////////////////////////////////////////////////////////////////////

class CalendarUkraine extends ClockFull {
  constructor() {
    super();
    this.view = getUaFormat;
    this.period = false;
  }
}

customElements.define('calendar-ukraine', CalendarUkraine);