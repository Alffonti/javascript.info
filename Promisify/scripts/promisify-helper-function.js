function promisify(f) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      function callback(err, ...results) {
        if (err) {
          reject(err)
        } else {
          resolve(results.length === 1 ? results[0] : results)
        }
      }

      args.push(callback)

      f.call(this, ...args)
    })
  }
}
