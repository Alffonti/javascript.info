const log = (fn, ...args) => {
  console.log(fn(...args))
}

const alert = message => {
  console.log(message)
}

const separator = () => {
  console.log('---')
}

const byteSize = str => {
  return new Blob([str]).size
}

const unicode = str => {
  return `U+${str.codePointAt(0).toString(16)}`
}

const slice = (str, start, end) => {
  return Array.from(str).slice(start, end).join('')
}

const stringLength = str => {
  // consider surrogate pairs as one grapheme
  // still not perfect: stringLength('रः') // Output: 2 instead of 1
  return Array.from(str).length
}
