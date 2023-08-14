const getSumAsync = (num1, num2, callback) => {
  if (!num1 || !num2) {
    return callback(new Error('Missing dependencies'), null)
  }

  const sum = num1 + num2
  const message = `Sum is ${sum}`
  return callback(null, sum, message)
}
