// Data binding function
function bindDataToTemplate(templateContent, data) {
  const elements = templateContent.querySelectorAll('[data-bind]')
  elements.forEach(element => {
    const dataKey = element.getAttribute('data-bind')
    element.textContent = data[dataKey]
  })
}
