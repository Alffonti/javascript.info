class FancyTabs extends HTMLElement {
  constructor() {
    super()
    this.panels = []
    this.tabs = []
    this.selected = 0
  }

  connectedCallback() {
    const template = document.getElementById('fancy-tabs-template').content
    this.attachShadow({ mode: 'open' }).append(template.cloneNode(true))

    this.setAttribute('role', 'tablist')

    this.tabsSlot = this.shadowRoot.querySelector('#tabsSlot')
    const panelsSlot = this.shadowRoot.querySelector('#panelsSlot')

    this.tabs = this.tabsSlot.assignedElements({ flatten: true })

    this.panels = panelsSlot.assignedElements({ flatten: true })

    // Add aria role="tabpanel" to each content panel.
    this.panels.forEach(panel => {
      panel.setAttribute('role', 'tabpanel')
      panel.setAttribute('tabindex', 0)
    })

    // References so we can remove listeners later.
    this.boundOnTitleClick = this.onTitleClick.bind(this)
    this.boundOnKeyDown = this.onKeyDown.bind(this)

    this.tabsSlot.addEventListener('click', this.boundOnTitleClick)
    this.tabsSlot.addEventListener('keydown', this.boundOnKeyDown)

    this.selected = this.findFirstSelectedTab() || 0
  }

  disconnectedCallback() {
    this.tabsSlot.removeEventListener('click', this.boundOnTitleClick)
    this.tabsSlot.removeEventListener('keydown', this.boundOnKeyDown)
  }

  get selected() {
    return this._selected
  }

  set selected(idx) {
    this._selected = idx
    this.selectTab(idx)

    // Update the element's selected attribute value when the backing property changes.
    this.setAttribute('selected', idx)
  }

  onTitleClick(e) {
    if (e.target.slot === 'title') {
      this.selected = this.tabs.indexOf(e.target)
      e.target.focus()
    }
  }

  onKeyDown(e) {
    switch (e.code) {
      case 'ArrowUp':
      case 'ArrowLeft':
        this.selectPreviousTab()
        break
      case 'ArrowDown':
      case 'ArrowRight':
        e.preventDefault()
        this.selectNextTab()
        break
      default:
        break
    }
  }

  findFirstSelectedTab() {
    for (const [i, tab] of this.tabs.entries()) {
      tab.setAttribute('role', 'tab')

      // Allow users to declaratively select a tab
      // Highlight the last tab that has the selected attribute.
      if (tab.hasAttribute('selected')) {
        return i
      }
    }
    return null
  }

  selectTab(idx = null) {
    for (const [i, tab] of this.tabs.entries()) {
      const select = i === idx
      tab.setAttribute('tabindex', select ? 0 : -1)
      tab.setAttribute('aria-selected', select)
      this.panels[i].setAttribute('aria-hidden', !select)
    }
  }

  selectNextTab() {
    const idx = (this.selected + 1) % this.tabs.length
    this.tabs[idx].click()
  }

  selectPreviousTab() {
    let idx = this.selected - 1
    idx = idx < 0 ? this.tabs.length - 1 : idx
    this.tabs[idx].click()
  }
}

customElements.define('fancy-tabs', FancyTabs)
