const allCustomElements = []

function isCustomElement(el) {
  const isAttr = el.getAttribute('is')
  console.log('isAttr:', isAttr)
  // Check for <super-button> and <button is="super-button">.
  console.log('el.localName:', el.localName)
  return el.localName.includes('-') || (isAttr && isAttr.includes('-'))
}

function findAllCustomElements(nodes) {
  console.log(nodes)
  for (let i = 0; (el = nodes[i]); ++i) {
    console.log('---')
    console.dir(el)
    if (isCustomElement(el)) {
      console.log('Node is a custom element')
      allCustomElements.push(el)
      console.log('array of allCustomElements:', allCustomElements)
    }
    // If the element has shadow DOM, dig deeper.
    if (el.shadowRoot) {
      console.log('Node is a shadow host')
      findAllCustomElements(el.shadowRoot.querySelectorAll('*'))
    }
  }
}

findAllCustomElements(document.querySelectorAll('*'))

console.log('All custom elements: ', allCustomElements) // Output: Array of all custom elements found in the document
