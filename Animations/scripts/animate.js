function animate({ duration, draw, timing }) {
  let start = performance.now()
  console.log(
    'start: ',
    start.toFixed(0),
    '(The duration from the initial navigation to the first requestAnimationFrame invocation)'
  )
  console.log('duration: ', duration, 'ms')

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration
    console.log('---')

    console.log('time: ', (time - start).toFixed(0), 'ms')
    console.log('timeFraction: ', timeFraction.toFixed(3))

    if (timeFraction > 1) timeFraction = 1

    let progress = timing(timeFraction)

    draw(progress)

    if (timeFraction < 1) {
      requestAnimationFrame(animate)
    }
  })
}
