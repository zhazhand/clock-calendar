class ClockCalendar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
    this.template = document.querySelector('.element-content');
  }

  connectedCallback() {
    this.init();
    this.render();
    this.addEventListener('click', this.changeFormat);
    this.addEventListener('contextmenu', this.changeView);
  }

  disconnectedCallback(){
    this.removeEventListener('click', this.changeFormat);
    this.removeEventListener('contextmenu', this.changeView);
  }

  static get observedAttributes() {
    return ['current-view'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (oldVal !== newVal) {
      let element;
      switch (newVal) {
        case 'shortTime':
          {
            element = new ClockShort;
            break;
          }
        case 'fullTime':
          {
            element = new ClockFull;
            break;
          }
        case 'euroFormat':
          {
            element = new CalendarEurope;
            break;
          }
        case 'uaFormat':
          {
            element = new CalendarUkraine;
            break;
          }
      }
      this.childNodes[0]?this.replaceChild(element, this.childNodes[0]):this.appendChild(element);
    }

  }

  render() {
    if (!this.ownerDocument.defaultView) return;
    const content = this.template.content.cloneNode(true);

    this.shadowRoot.appendChild(content);
  }

  changeFormat(e) {
    e.preventDefault();
    let attr = this.getAttribute('current-view');
    switch (attr) {
      case 'shortTime':
        this.setAttribute('current-view', 'fullTime');
        break;
      case 'fullTime':
        this.setAttribute('current-view', 'shortTime');
        break;
      case 'uaFormat':
        this.setAttribute('current-view', 'euroFormat');
        break;
      case 'euroFormat':
        this.setAttribute('current-view', 'uaFormat');
        break;
    }
  }

  changeView(e) {
    e.preventDefault();
    let attr = this.getAttribute('current-view');
    if (attr === 'fullTime' || attr === 'shortTime') {
      this.setAttribute('current-view', 'euroFormat');
    } else if (attr === 'euroFormat' || attr === 'uaFormat') {
      this.setAttribute('current-view', 'shortTime');
    }
  }

  init() {
    if (!this.hasAttribute('current-view')) {
      this.setAttribute('current-view', 'shortTime');
    }
  }
}

customElements.define('clock-calendar', ClockCalendar);