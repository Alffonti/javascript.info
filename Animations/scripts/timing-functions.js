function linear(timeFraction) {
  return timeFraction
}

function quad(timeFraction) {
  return Math.pow(timeFraction, 2)
}

function circ(timeFraction) {
  return 1 - Math.sin(Math.acos(timeFraction))
}

function back(x, timeFraction) {
  return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
}

function bounce(timeFraction) {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
    }
  }
}

function elastic(x, timeFraction) {
  return (
    Math.pow(2, 10 * (timeFraction - 1)) *
    Math.cos(((20 * Math.PI * x) / 3) * timeFraction)
  )
}
// Not working yet. Need to find the right equation https://javascript.info/bezier-curve
function cubicBezier(timeFraction) {
  const p1 = 0
  const p2 = 0
  const p3 = 1
  const p4 = 1

  const t = timeFraction

  const term = 1 - t

  let progress =
    Math.pow(term, 3) * p1 +
    3 * Math.pow(term, 2) * t * p2 +
    3 * term * Math.pow(t, 2) * p3 +
    Math.pow(t, 3) * p4

  console.log('progress:', (progress * 100).toFixed(0), '%')

  return progress
}

function makeEaseOut(timing) {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction)
  }
}

function makeEaseInOut(timing) {
  return function (timeFraction) {
    if (timeFraction < 0.5) return timing(2 * timeFraction) / 2
    else return (2 - timing(2 * (1 - timeFraction))) / 2
  }
}

let bounceEaseOut = makeEaseOut(bounce)
let bounceEaseInOut = makeEaseInOut(bounce)
