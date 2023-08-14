customElements.define(
  'custom-menu',
  class extends HTMLElement {
    items = []

    connectedCallback() {
      this.attachShadow({ mode: 'open' })

      // tmpl is the shadow DOM template (above)
      this.shadowRoot.append(tmpl.content.cloneNode(true))

      // we can't select light DOM nodes, so let's handle clicks on the slot
      this.shadowRoot.querySelector('slot[name="title"]').onclick = () => {
        // open/close the menu
        this.shadowRoot.querySelector('.menu').classList.toggle('closed')
      }

      this.shadowRoot.addEventListener('slotchange', e => console.log())

      // triggers when slot content changes
      this.shadowRoot.addEventListener('slotchange', e => {
        let slot = e.target
        if (slot.name == 'item') {
          this.items = slot.assignedElements().map(elem => elem.textContent)
          console.log(`New menu items added to slot. `)
          console.log('Items: ' + this.items)
        }
      })
    }
  }
)
